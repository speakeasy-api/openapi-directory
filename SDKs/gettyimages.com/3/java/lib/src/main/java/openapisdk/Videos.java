package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Videos {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Videos(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getV3Videos - Get metadata for multiple videos by supplying multiple video ids
     *
     * Use this endpoint to return detailed video metadata for all the specified video ids.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "videos": 
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "videos": 
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes": 
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     * 
     * ## Request Usage Considerations
     * 
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     * 
    **/
    public openapisdk.models.operations.GetV3VideosResponse getV3Videos(openapisdk.models.operations.GetV3VideosRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/videos");
        
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

        openapisdk.models.operations.GetV3VideosResponse res = new openapisdk.models.operations.GetV3VideosResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getV3VideosId - Get metadata for a single video by supplying one video id
     *
     * Use this endpoint to return detailed video metadata for the specified video id.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
     * 
     * ## Request Usage Considerations
     * 
     * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
     * 
    **/
    public openapisdk.models.operations.GetV3VideosIdResponse getV3VideosId(openapisdk.models.operations.GetV3VideosIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/videos/{id}", request.pathParams);
        
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

        openapisdk.models.operations.GetV3VideosIdResponse res = new openapisdk.models.operations.GetV3VideosIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getV3VideosIdDownloadhistory - Returns information about a customer's download history for a specific asset
    **/
    public openapisdk.models.operations.GetV3VideosIdDownloadhistoryResponse getV3VideosIdDownloadhistory(openapisdk.models.operations.GetV3VideosIdDownloadhistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/videos/{id}/downloadhistory", request.pathParams);
        
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

        openapisdk.models.operations.GetV3VideosIdDownloadhistoryResponse res = new openapisdk.models.operations.GetV3VideosIdDownloadhistoryResponse() {{
            assetDownloadHistoryResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssetDownloadHistoryResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssetDownloadHistoryResults.class);
                res.assetDownloadHistoryResults = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getV3VideosIdSameSeries - Retrieve creative videos from the same series
     *
     * This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.GetV3VideosIdSameSeriesResponse getV3VideosIdSameSeries(openapisdk.models.operations.GetV3VideosIdSameSeriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/videos/{id}/same-series", request.pathParams);
        
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

        openapisdk.models.operations.GetV3VideosIdSameSeriesResponse res = new openapisdk.models.operations.GetV3VideosIdSameSeriesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getV3VideosIdSimilar - Retrieve similar videos
     *
     * This endpoint will provide a list of videos that are similar to the specified asset id.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "videos": 
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_name",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "license_model",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "videos": 
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     * 		"call_for_image",
     *         "caption",
     *         "clip_length",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "color_type",
     *         "copyright",
     *         "date_created",
     *         "display_sizes":
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ],
     *         "download_sizes",
     *         "era",
     *         "event_ids",
     *         "license_model",
     *         "mastered_to",
     *         "originally_shot_on",
     *         "product_types",
     *         "quality_rank",
     *         "shot_speed",
     *         "source",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "videos":
     *     [
     *         "display_sizes": 
     *         [
     *             {
     *                 "name": "comp"
     *             },
     *             {
     *                 "name": "preview"
     *             },
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.GetV3VideosIdSimilarResponse getV3VideosIdSimilar(openapisdk.models.operations.GetV3VideosIdSimilarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/videos/{id}/similar", request.pathParams);
        
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

        openapisdk.models.operations.GetV3VideosIdSimilarResponse res = new openapisdk.models.operations.GetV3VideosIdSimilarResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
}