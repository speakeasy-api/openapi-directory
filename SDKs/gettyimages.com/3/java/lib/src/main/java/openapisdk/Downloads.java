package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Downloads {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Downloads(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getV3Downloads - Returns information about a customer's downloaded assets.
     *
     * Returns information about a customer's previously downloaded assets.
     * 
     * You'll need an API key and access token to use this resource.
     *  
     * 	
     * This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
     * you need to also include an authorization token in the header of your request. 
     * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
     * 
    **/
    public openapisdk.models.operations.GetV3DownloadsResponse getV3Downloads(openapisdk.models.operations.GetV3DownloadsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/downloads");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetV3DownloadsResponse res = new openapisdk.models.operations.GetV3DownloadsResponse() {{
            getDownloadsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetDownloadsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetDownloadsResponse.class);
                res.getDownloadsResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }

        return res;
    }
	
	
    /**
     * postV3DownloadsImagesId - Download an image
     *
     * Use this endpoint to generate download URLs and related data for images you are authorized to download.
     * 
     * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
     * 
     * The download limit for a given download period is covered in your product agreement established with Getty Images.
     * 
     * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
     * 
     * ## Auto Downloads
     * The `auto_download` request query parameter specifies whether to automatically download the image.
     * 
     * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
     * 
     * Client Request:
     * 
     * ```
     * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
     * ```
     * 
     * Server Response:
     * 
     * ```
     * HTTP/1.1 303 See Other
     * Location: https://delivery.gettyimages.com/...
     * ```
     * 
     * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. 
     * 
     * Client Request:
     * 
     * ```
     * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
     * ```
     * 
     * Server Response:
     * 
     * ```
     * HTTP/1.1 200 OK
     * {
     * 	"uri": "https://delivery.gettyimages.com/..."
     * }
     * ```
     * ## Downloading Via the Returned URI
     * 
     * The URI returned by this call should be considered opaque and the format could change at any time.
     * In order to get the filename, length or file type, the response headers must be inspected. An example
     * response follows:
     * 
     * ```
     * content-length: 33959979
     * content-type: image/jpeg
     * content-disposition: attachment; filename=GettyImages-1167612765.jpg
     * ```
     * 
     * The `content-disposition` header must be parsed to get a usable filename.
     * 
     * ## Download URI expiration
     * 
     * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
     * 
    **/
    public openapisdk.models.operations.PostV3DownloadsImagesIdResponse postV3DownloadsImagesId(openapisdk.models.operations.PostV3DownloadsImagesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/downloads/images/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostV3DownloadsImagesIdResponse res = new openapisdk.models.operations.PostV3DownloadsImagesIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 303) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * postV3DownloadsVideosId - Download a video
     *
     * Use this endpoint to generate download URLs and related data for videos you are authorized to download.
     * 
     * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
     * 
     * The download limit for a given download period is covered in your product agreement established with Getty Images.
     * 
     * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
     * 
     * ## Auto Downloads
     * The `auto_download` request query parameter specifies whether to automatically download the video.
     * 
     * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
     * 
     * Client Request:
     * 
     * ```
     * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
     * ```
     * 
     * Server Response:
     * 
     * ```
     * HTTP/1.1 303 See Other
     * Location: https://delivery.gettyimages.com/...
     * ```
     * 
     * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. 
     * 
     * Client Request:
     * 
     * ```
     * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
     * ```
     * 
     * Server Response:
     * 
     * ```
     * HTTP/1.1 200 OK
     * {
     * 	"uri": "https://delivery.gettyimages.com/..."
     * }
     * ```
     * 
     * ## Downloading Via the Returned URI
     * 
     * The URI returned by this call should be considered opaque and the format could change at any time.
     * In order to get the filename, length or file type, the response headers must be inspected. An example
     * response follows:
     * 
     * ```
     * content-length: 283925783
     * content-type: video/quicktime
     * content-disposition: attachment; filename=GettyImages-690773579.mov
     * ```
     * 
     * The `content-disposition` header must be parsed to get a usable filename.
     * 
     * ## Download URI expiration
     * 
     * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
     * 
    **/
    public openapisdk.models.operations.PostV3DownloadsVideosIdResponse postV3DownloadsVideosId(openapisdk.models.operations.PostV3DownloadsVideosIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/downloads/videos/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostV3DownloadsVideosIdResponse res = new openapisdk.models.operations.PostV3DownloadsVideosIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 303) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
}