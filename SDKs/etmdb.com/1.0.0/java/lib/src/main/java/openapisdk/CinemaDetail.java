package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class CinemaDetail {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CinemaDetail(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * cinemaDetailSearchRead - Return cinema details search result
     *
     * Return cinema details search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{cinema_name}__: Used as a key word to search cinemas,
     * 
     * For more details on how cinemas are listed [see here][ref].
     * [ref]: https://etmdb.com/en/cinema-list/-updated_date
    **/
    public openapisdk.models.operations.CinemaDetailSearchReadResponse cinemaDetailSearchRead(openapisdk.models.operations.CinemaDetailSearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/cinema-detail/search/{cinema_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CinemaDetailSearchReadResponse res = new openapisdk.models.operations.CinemaDetailSearchReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}