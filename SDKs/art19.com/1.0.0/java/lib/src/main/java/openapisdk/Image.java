package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Image {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Image(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getImages - Get a list of images
     *
     * An image represents a piece of artwork attached to some entity like a series, season, or episode,
     * and is _owned_ by an entity called the `bucket`.
     * An image is also a container for several `MediaAssets` representing the physical files for various
     * styles used.
     * 
     * ## Media Asset Styles for Images
     * 
     * Most media assets use square images. You may upload and use a square image, or upload an image of any
     * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
     * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
     * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
     * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
     * version of the original file with the smaller of width or height as the square size.
     * 
     * The original image as uploaded into the system is always retained unmodified and available through
     * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
     * 
     * An image has media assets with the following styles:
     * 
     * - `original`: This is the original file provided. May not be available, depending on permissions
     *   and file type.
     * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
     *   This should be used for any application needing the original, uncropped, image.
     * - `regular`: If the image has cropping defined, this is the cropped image.
     *   If not, this is a square version of the original.
     * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
     * - `square-400`: A square version of the image with a size of `400x400` pixels.
     * - `square-640`: A square version of the image with a size of `640x640` pixels.
     * - `square-888`: A square version of the image with a size of `888x888` pixels.
     * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
     *   This variant is only created if the cropped width & height are each at least 3000.
     * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
     * 
     * ### Preferred image used in feeds
     * 
     * For the main series image used in feeds, it is ideal to use the `square-3000` version.
     * If that is not available, the `itunes` version should be used instead.
     * 
     * 
    **/
    public openapisdk.models.operations.GetImagesResponse getImages(openapisdk.models.operations.GetImagesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/images");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetImagesResponse res = new openapisdk.models.operations.GetImagesResponse() {{
            getImages200ApplicationVndApiPlusJsonObject = null;
            getImages400ApplicationVndApiPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/vnd.api+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetImages200ApplicationVndApiPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetImages200ApplicationVndApiPlusJson.class);
                res.getImages200ApplicationVndApiPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/vnd.api+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetImages400ApplicationVndApiPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetImages400ApplicationVndApiPlusJson.class);
                res.getImages400ApplicationVndApiPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
	
    /**
     * getImagesId - Get a specific image
     *
     * An image represents a piece of artwork attached to some entity like a series, season, or episode,
     * and is _owned_ by an entity called the `bucket`.
     * An image is also a container for several `MediaAssets` representing the physical files for various
     * styles used.
     * 
     * ## Media Asset Styles for Images
     * 
     * Most media assets use square images. You may upload and use a square image, or upload an image of any
     * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
     * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
     * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
     * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
     * version of the original file with the smaller of width or height as the square size.
     * 
     * The original image as uploaded into the system is always retained unmodified and available through
     * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
     * 
     * An image has media assets with the following styles:
     * 
     * - `original`: This is the original file provided. May not be available, depending on permissions
     *   and file type.
     * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
     *   This should be used for any application needing the original, uncropped, image.
     * - `regular`: If the image has cropping defined, this is the cropped image.
     *   If not, this is a square version of the original.
     * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
     * - `square-400`: A square version of the image with a size of `400x400` pixels.
     * - `square-640`: A square version of the image with a size of `640x640` pixels.
     * - `square-888`: A square version of the image with a size of `888x888` pixels.
     * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
     *   This variant is only created if the cropped width & height are each at least 3000.
     * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
     * 
     * ### Preferred image used in feeds
     * 
     * For the main series image used in feeds, it is ideal to use the `square-3000` version.
     * If that is not available, the `itunes` version should be used instead.
     * 
     * 
    **/
    public openapisdk.models.operations.GetImagesIdResponse getImagesId(openapisdk.models.operations.GetImagesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/images/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetImagesIdResponse res = new openapisdk.models.operations.GetImagesIdResponse() {{
            getImagesId200ApplicationVndApiPlusJsonObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/vnd.api+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetImagesId200ApplicationVndApiPlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetImagesId200ApplicationVndApiPlusJson.class);
                res.getImagesId200ApplicationVndApiPlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
}