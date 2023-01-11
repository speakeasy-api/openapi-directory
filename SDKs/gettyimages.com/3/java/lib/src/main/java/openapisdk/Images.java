package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Images {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Images(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getV3Images - Get metadata for multiple images by supplying multiple image ids
     *
     * This endpoint returns the detailed image metadata for all specified images.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build 
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist", 
     *         "artist_title", 
     *         "asset_family",
     *         "call_for_image",
     *         "caption", 
     *         "city",
     *         "collection_code",
     *         "collection_id", 
     *         "collection_name",
     *         "color_type", 
     *         "copyright", 
     *         "country", 
     *         "credit_line", 
     *         "date_created", 
     *         "date_submitted",
     *         "download_sizes", 
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province", 
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
     * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
     * in your result set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "images":
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
    public openapisdk.models.operations.GetV3ImagesResponse getV3Images(openapisdk.models.operations.GetV3ImagesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/images");
        
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

        openapisdk.models.operations.GetV3ImagesResponse res = new openapisdk.models.operations.GetV3ImagesResponse() {{
            imagesDetailResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ImagesDetailResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ImagesDetailResults.class);
                res.imagesDetailResults = out;
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
     * getV3ImagesId - Get metadata for a single image by supplying one image id
     *
     * This endpoint returns the detailed image metadata for a specified image.
     * 
     * You'll need an API key and access token to use this resource. 
     *  
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that
     * are often used to build search response results. The following fields are provided for every image in your
     * result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "artist",
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are 
     * often used to build a detailed view of images. The following fields are provided for every image in your 
     * result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist", 
     *         "artist_title", 
     *         "asset_family",
     *         "call_for_image",
     *         "caption", 
     *         "city",
     *         "collection_code",
     *         "collection_id", 
     *         "collection_name",
     *         "color_type", 
     *         "copyright", 
     *         "country", 
     *         "credit_line", 
     *         "date_created", 
     *         "date_submitted",
     *         "download_sizes", 
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "state_province", 
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
     * resolution files that are most frequently used to build a UI displaying search results. The following fields are provided 
     * for every image in your result set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "images":
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
    public openapisdk.models.operations.GetV3ImagesIdResponse getV3ImagesId(openapisdk.models.operations.GetV3ImagesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/images/{id}", request.pathParams);
        
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

        openapisdk.models.operations.GetV3ImagesIdResponse res = new openapisdk.models.operations.GetV3ImagesIdResponse() {{
            imagesDetailResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ImagesDetailResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ImagesDetailResults.class);
                res.imagesDetailResults = out;
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
     * getV3ImagesIdDownloadhistory - Returns information about a customer's download history for a specific asset
    **/
    public openapisdk.models.operations.GetV3ImagesIdDownloadhistoryResponse getV3ImagesIdDownloadhistory(openapisdk.models.operations.GetV3ImagesIdDownloadhistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/images/{id}/downloadhistory", request.pathParams);
        
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

        openapisdk.models.operations.GetV3ImagesIdDownloadhistoryResponse res = new openapisdk.models.operations.GetV3ImagesIdDownloadhistoryResponse() {{
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
     * getV3ImagesIdSameSeries - Retrieve creative images from the same series
     *
     * This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes": 
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
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
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "images":
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
    public openapisdk.models.operations.GetV3ImagesIdSameSeriesResponse getV3ImagesIdSameSeries(openapisdk.models.operations.GetV3ImagesIdSameSeriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/images/{id}/same-series", request.pathParams);
        
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

        openapisdk.models.operations.GetV3ImagesIdSameSeriesResponse res = new openapisdk.models.operations.GetV3ImagesIdSameSeriesResponse() {{
            imageSearchItemSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ImageSearchItemSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ImageSearchItemSearchResults.class);
                res.imageSearchItemSearchResults = out;
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
     * getV3ImagesIdSimilar - Retrieve similar images
     *
     * This endpoint will provide a list of images that are similar to the specified asset id.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
     * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "asset_family",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
     *         "display_sizes": 
     *         [
     *             {
     *                 "name": "thumb"
     *             }
     *         ]
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
     * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
     * 
     * ```
     * {
     *     "images":
     *     [
     *         "allowed_use",
     *         "artist",
     *         "asset_family",
     *         "call_for_image",
     *         "caption",
     *         "collection_code",
     *         "collection_id",
     *         "collection_name",
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
     *         "editorial_segments",
     *         "event_ids",
     *         "graphical_style",
     *         "license_model",
     *         "max_dimensions",
     *         "orientation",
     *         "product_types",
     *         "quality_rank",
     *         "referral_destinations",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
     * set when you include **display_set** in your request.
     * 
     * ```
     * {
     *     "images":
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
    public openapisdk.models.operations.GetV3ImagesIdSimilarResponse getV3ImagesIdSimilar(openapisdk.models.operations.GetV3ImagesIdSimilarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/images/{id}/similar", request.pathParams);
        
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

        openapisdk.models.operations.GetV3ImagesIdSimilarResponse res = new openapisdk.models.operations.GetV3ImagesIdSimilarResponse() {{
            imageSearchItemSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ImageSearchItemSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ImageSearchItemSearchResults.class);
                res.imageSearchItemSearchResults = out;
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
	
}