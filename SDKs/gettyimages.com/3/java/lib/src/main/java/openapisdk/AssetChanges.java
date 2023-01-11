package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class AssetChanges {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AssetChanges(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteV3AssetChangesChangeSetsChangeSetId - Confirm asset change notifications.
     *
     * # Delete Asset Changes
     * 
     * Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
     * 
     * ##  Quickstart
     * 
     * You'll need an API key and an access token to use this resource.
     * 
    **/
    public openapisdk.models.operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse deleteV3AssetChangesChangeSetsChangeSetId(openapisdk.models.operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/asset-changes/change-sets/{change-set-id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse res = new openapisdk.models.operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getV3AssetChangesChannels - Get a list of asset change notification channels.
     *
     * # Get Partner Channels
     * 
     * Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
     * 
     * ##  Quickstart
     * 
     * You'll need an API key and an access token to use this resource.
     * 
     * Partners who have a channel that has been removed should contact their sales representative to be set up again.
     * 
     * 
    **/
    public openapisdk.models.operations.GetV3AssetChangesChannelsResponse getV3AssetChangesChannels() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/asset-changes/channels");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetV3AssetChangesChannelsResponse res = new openapisdk.models.operations.GetV3AssetChangesChannelsResponse() {{
            channels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Channel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Channel[].class);
                res.channels = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * putV3AssetChangesChangeSets - Get asset change notifications.
     *
     * # Asset Changes
     * 
     * Get notifications about new, updated or deleted assets.
     * 
     * ##  Quickstart
     * 
     * You'll need an API key and an access token to use this resource. 
     * 
     * Notifications older than 60 days will be removed from partner channels.
     * 
    **/
    public openapisdk.models.operations.PutV3AssetChangesChangeSetsResponse putV3AssetChangesChangeSets(openapisdk.models.operations.PutV3AssetChangesChangeSetsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v3/asset-changes/change-sets");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutV3AssetChangesChangeSetsResponse res = new openapisdk.models.operations.PutV3AssetChangesChangeSetsResponse() {{
            assetChanges = null;
            assetChanges = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssetChanges out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssetChanges.class);
                res.assetChanges = out;
            }
        }
        else if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssetChanges out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssetChanges.class);
                res.assetChanges = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
}