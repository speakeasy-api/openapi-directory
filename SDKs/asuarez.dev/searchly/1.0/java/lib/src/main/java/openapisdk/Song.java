package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Song {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Song(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * srcSearchlyApiV1ControllersSongSearch - API endpoint to search songs from the database given a query
     *
     * Endpoint for an end-user client to search songs from the database given a String query.
     * 
     * If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
     * 
     * ```
     * https://searchly.asuarez.dev/api/v1/song/search
     * ```
     * 
    **/
    public openapisdk.models.operations.SrcSearchlyApiV1ControllersSongSearchResponse srcSearchlyApiV1ControllersSongSearch(openapisdk.models.operations.SrcSearchlyApiV1ControllersSongSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/song/search");
        
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

        openapisdk.models.operations.SrcSearchlyApiV1ControllersSongSearchResponse res = new openapisdk.models.operations.SrcSearchlyApiV1ControllersSongSearchResponse() {{
            apiResponseSong = null;
            srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiResponseSong out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiResponseSong.class);
                res.apiResponseSong = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/text")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString = out;
            }
        }

        return res;
    }
	
}