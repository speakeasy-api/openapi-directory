package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class ContentBlocks {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ContentBlocks(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * listAvailableContentBlocks - List Available Content Blocks
     *
     * This endpoint will list existing Content Block information.
     * 
     * ### Successful Response Properties
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR_REST_API_KEY
     * {
     *   "count": "integer",
     *   "content_blocks": [
     *     {
     *       "content_block_id": "string",
     *       "name": "string",
     *       "content_type": "html or text",
     *       "liquid_tag": "string",
     *       "inclusion_count" : "integer",
     *       "created_at": "time-in-iso",
     *       "last_edited": "time-in-iso",
     *       "tags" : "array of strings"
     *     }
     *   ]
     * }
     * ```
     * 
     * ### Possible Errors
     * - `Modified after time is invalid.`
     * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
     * 
     * - `Modified before time is invalid.`
     * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
     * 
     * - `Modified after time must be earlier than or the same as modified before time.`
     * 
     * - `Content Block number limit is invalid.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     * 
     * - `Content Block number limit must be greater than 0.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     * 
     * - `Content Block number limit exceeds maximum of 1000.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     * 
     * - `Offset is invalid.`
     * The `offset` parameter must be an integer (positive number) greater than 0.
     * 
     * - `Offset must be greater than 0.`
     * The `offset` parameter must be an integer (positive number) greater than 0.
    **/
    public openapisdk.models.operations.ListAvailableContentBlocksResponse listAvailableContentBlocks(openapisdk.models.operations.ListAvailableContentBlocksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/content_blocks/list");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListAvailableContentBlocksResponse res = new openapisdk.models.operations.ListAvailableContentBlocksResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * seeContentBlockInformation - See Content Block Information
     *
     * This endpoint will call information for an existing Content Block.
     * 
     * ### Successful Response Properties
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR_REST_API_KEY
     * {
     *   "content_block_id": "string",
     *   "name": "string",
     *   "content": "string",
     *   "description": "string",
     *   "content_type": "html or text",
     *   "tags":  "array of strings",
     *   "created_at": "time-in-iso",
     *   "last_edited": "time-in-iso",
     *   "inclusion_count" : "integer",
     *   "message": "success"
     * }
     * ```
     * 
     * ### Possible Errors
     * - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
     * 
     * - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
     * 
     * - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
     * 
     * - `Include Inclusion Data - error` - One of true or false is not provided.
    **/
    public openapisdk.models.operations.SeeContentBlockInformationResponse seeContentBlockInformation(openapisdk.models.operations.SeeContentBlockInformationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/content_blocks/info");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SeeContentBlockInformationResponse res = new openapisdk.models.operations.SeeContentBlockInformationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}