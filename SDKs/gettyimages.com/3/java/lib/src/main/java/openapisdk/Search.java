package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Search {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Search(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getV3SearchEvents - Search for events
     *
     * Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * 
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     * 
    **/
    public openapisdk.models.operations.GetV3SearchEventsResponse getV3SearchEvents(openapisdk.models.operations.GetV3SearchEventsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/events");
        
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

        openapisdk.models.operations.GetV3SearchEventsResponse res = new openapisdk.models.operations.GetV3SearchEventsResponse() {{
            eventsSearchResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EventsSearchResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EventsSearchResult.class);
                res.eventsSearchResult = out;
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
     * getV3SearchImages - Search for both creative and editorial images
     *
     * Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
     * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
     * 
     * 	-H "Authorization: Bearer <your-token>"
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
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
     *         ],
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. 
     * The following fields are provided for every image in your result set when you include **detail_set** in your request.
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
     * ]
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most 
     * frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
     * in your request.
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
    public openapisdk.models.operations.GetV3SearchImagesResponse getV3SearchImages(openapisdk.models.operations.GetV3SearchImagesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/images");
        
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

        openapisdk.models.operations.GetV3SearchImagesResponse res = new openapisdk.models.operations.GetV3SearchImagesResponse() {{
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

        return res;
    }
	
	
    /**
     * getV3SearchImagesCreative - Search for creative images only
     *
     * Use this endpoint to search our contemporary stock photos, illustrations and archival images.
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
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to 
     * build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
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
     *         ],
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to 
     * build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
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
     * ]
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
     * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
     * in your result set when you include **display_set** in your request.
     * 
     * ```Go
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
    **/
    public openapisdk.models.operations.GetV3SearchImagesCreativeResponse getV3SearchImagesCreative(openapisdk.models.operations.GetV3SearchImagesCreativeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/images/creative");
        
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

        openapisdk.models.operations.GetV3SearchImagesCreativeResponse res = new openapisdk.models.operations.GetV3SearchImagesCreativeResponse() {{
            creativeImageSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreativeImageSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreativeImageSearchResults.class);
                res.creativeImageSearchResults = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getV3SearchImagesCreativeByImage - Search for creative images based on url
     *
     * Allows searching for similar creative images by passing the URL to an existing image. All responses will have the exclude_nudity filter automatically applied.
     * 
     * Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
     * For example, using cURL:
     * ```sh
     * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
     * ```
     * 
     * Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
     * 
     * Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
     * 
     * <!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
     * <!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->
     * 
    **/
    public openapisdk.models.operations.GetV3SearchImagesCreativeByImageResponse getV3SearchImagesCreativeByImage(openapisdk.models.operations.GetV3SearchImagesCreativeByImageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/images/creative/by-image");
        
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

        openapisdk.models.operations.GetV3SearchImagesCreativeByImageResponse res = new openapisdk.models.operations.GetV3SearchImagesCreativeByImageResponse() {{
            searchByImageResourceResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SearchByImageResourceResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SearchByImageResourceResults.class);
                res.searchByImageResourceResults = out;
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
     * getV3SearchImagesEditorial - Search for editorial images only
     *
     * Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
     * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
     * 
     * 	-H "Authorization: Bearer <your-token>"
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
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
     *         ],
     *         "license_model",
     *         "max_dimensions",
     *         "title"
     *     ]
     * }
     * ```
     * 
     * #### Detail Fields Set
     * 
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
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
     * ]
     * ```
     * 
     * #### Display Fields Set
     * 
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
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
    public openapisdk.models.operations.GetV3SearchImagesEditorialResponse getV3SearchImagesEditorial(openapisdk.models.operations.GetV3SearchImagesEditorialRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/images/editorial");
        
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

        openapisdk.models.operations.GetV3SearchImagesEditorialResponse res = new openapisdk.models.operations.GetV3SearchImagesEditorialResponse() {{
            editorialImageSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EditorialImageSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EditorialImageSearchResults.class);
                res.editorialImageSearchResults = out;
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
     * getV3SearchVideosCreative - Search for creative videos
     *
     * Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
     * 
     * You'll need an API key and access token to use this resource.
     * 
     * You can show different information in the response by specifying values on the "fields" parameter (see details below).
     * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
     * being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only 
     * assets that you have a license to use, you need to also include an authorization token in the header of your request.
     * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
     * 
     * ## Working with Fields Sets
     * 
     * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
     * 
     * #### Summary Fields Set
     * 
     * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
     * response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
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
     * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
     * detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
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
     * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
     * that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result 
     * set when you include **display_set** in your request.
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
    public openapisdk.models.operations.GetV3SearchVideosCreativeResponse getV3SearchVideosCreative(openapisdk.models.operations.GetV3SearchVideosCreativeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/videos/creative");
        
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

        openapisdk.models.operations.GetV3SearchVideosCreativeResponse res = new openapisdk.models.operations.GetV3SearchVideosCreativeResponse() {{
            creativeVideoSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreativeVideoSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreativeVideoSearchResults.class);
                res.creativeVideoSearchResults = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }
	
	
    /**
     * getV3SearchVideosCreativeByImage - Search for creative videos based on url
     *
     * Search for **similar creative videos** by passing an `asset_id` to an asset in our catalog OR `image_url` to any image or a frame grab from a video. All responses will have the exclude_nudity filter automatically applied.
     * 
     * ## Searching by URL
     * 
     * When searching by `image_url`, an image or frame grab in JPEG format must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
     * Example using cURL:
     * ```sh
     * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
     * ```
     * 
     * Uploads will be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
     * 
     * Once the JPEG has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
     * 
     * ## Searching by asset id
     * 
     * When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used. 
    **/
    public openapisdk.models.operations.GetV3SearchVideosCreativeByImageResponse getV3SearchVideosCreativeByImage(openapisdk.models.operations.GetV3SearchVideosCreativeByImageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/videos/creative/by-image");
        
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

        openapisdk.models.operations.GetV3SearchVideosCreativeByImageResponse res = new openapisdk.models.operations.GetV3SearchVideosCreativeByImageResponse() {{
            creativeVideoSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreativeVideoSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreativeVideoSearchResults.class);
                res.creativeVideoSearchResults = out;
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
     * getV3SearchVideosEditorial - Search for editorial videos
     *
     * Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
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
    public openapisdk.models.operations.GetV3SearchVideosEditorialResponse getV3SearchVideosEditorial(openapisdk.models.operations.GetV3SearchVideosEditorialRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/search/videos/editorial");
        
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

        openapisdk.models.operations.GetV3SearchVideosEditorialResponse res = new openapisdk.models.operations.GetV3SearchVideosEditorialResponse() {{
            editorialVideoSearchResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EditorialVideoSearchResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EditorialVideoSearchResults.class);
                res.editorialVideoSearchResults = out;
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
	
}