package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Watchlist {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Watchlist(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * watchlistSearchRead - Return watchlist search result
     *
     * Return watchlist search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{movie_title}__: Used as a key word to search movies on watchlist
     * * You can use both Amharic or English charset/font to search
     * 
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
    **/
    public openapisdk.models.operations.WatchlistSearchReadResponse watchlistSearchRead(openapisdk.models.operations.WatchlistSearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/watchlist/search/{movie_title}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WatchlistSearchReadResponse res = new openapisdk.models.operations.WatchlistSearchReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * watchlistSearchallRead - Return watchlist search result
     *
     * Return watchlist search result
     * 
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * 
     * For more details on how watchlist are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movies/watchlist/id
    **/
    public openapisdk.models.operations.WatchlistSearchallReadResponse watchlistSearchallRead(openapisdk.models.operations.WatchlistSearchallReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/watchlist/searchall/{param}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WatchlistSearchallReadResponse res = new openapisdk.models.operations.WatchlistSearchallReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}