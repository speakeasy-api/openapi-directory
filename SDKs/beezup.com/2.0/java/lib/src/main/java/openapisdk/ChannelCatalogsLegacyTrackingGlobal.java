package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class ChannelCatalogsLegacyTrackingGlobal {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ChannelCatalogsLegacyTrackingGlobal(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getLegacyTrackingChannelCatalog - Get the channel catalog configured to use legacy tracking format information
    **/
    public openapisdk.models.operations.GetLegacyTrackingChannelCatalogResponse getLegacyTrackingChannelCatalog(openapisdk.models.operations.GetLegacyTrackingChannelCatalogRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/legacyTracking/channelCatalogs/{channelCatalogId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLegacyTrackingChannelCatalogResponse res = new openapisdk.models.operations.GetLegacyTrackingChannelCatalogResponse() {{
            legacyTrackingChannelCatalog = null;
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LegacyTrackingChannelCatalog out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LegacyTrackingChannelCatalog.class);
                res.legacyTrackingChannelCatalog = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLegacyTrackingChannelCatalogs - List all your current channel catalogs configured to use legacy tracking format
    **/
    public openapisdk.models.operations.GetLegacyTrackingChannelCatalogsResponse getLegacyTrackingChannelCatalogs(openapisdk.models.operations.GetLegacyTrackingChannelCatalogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/legacyTracking/channelCatalogs/");
        
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

        openapisdk.models.operations.GetLegacyTrackingChannelCatalogsResponse res = new openapisdk.models.operations.GetLegacyTrackingChannelCatalogsResponse() {{
            legacyTrackingChannelCatalogList = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LegacyTrackingChannelCatalogList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LegacyTrackingChannelCatalogList.class);
                res.legacyTrackingChannelCatalogList = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * migrateLegacyTrackingChannelCatalog - Migrate a channel catalog to current tracking format
    **/
    public openapisdk.models.operations.MigrateLegacyTrackingChannelCatalogResponse migrateLegacyTrackingChannelCatalog(openapisdk.models.operations.MigrateLegacyTrackingChannelCatalogRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/user/legacyTracking/channelCatalogs/{channelCatalogId}/migrate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MigrateLegacyTrackingChannelCatalogResponse res = new openapisdk.models.operations.MigrateLegacyTrackingChannelCatalogResponse() {{
            beezUPCommonErrorResponseMessage = null;
            beezUPCommonErrorResponseMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BeezUpCommonErrorResponseMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BeezUpCommonErrorResponseMessage.class);
                res.beezUPCommonErrorResponseMessage = out;
            }
        }

        return res;
    }
	
}