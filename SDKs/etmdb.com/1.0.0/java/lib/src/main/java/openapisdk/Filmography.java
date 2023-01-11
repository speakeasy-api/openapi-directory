package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Filmography {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Filmography(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * filmographySearchRead - Return filmography search result
     *
     * Return filmography search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{movie_title}__: Used as a key word to search movies
     * * You can use both Amharic or English charset/font to search
     * 
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    public openapisdk.models.operations.FilmographySearchReadResponse filmographySearchRead(openapisdk.models.operations.FilmographySearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/filmography/search/{movie_title}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FilmographySearchReadResponse res = new openapisdk.models.operations.FilmographySearchReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * filmographySearchallRead - Return filmography search result
     *
     * Return filmography search result
     * 
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * artist first name
     * * artist last name
     * * artist username
     * * movie title or
     * * filmography description (such as director, actor, producer, etc)
     * 
     * For more details on how filmographies are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    public openapisdk.models.operations.FilmographySearchallReadResponse filmographySearchallRead(openapisdk.models.operations.FilmographySearchallReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/filmography/searchall/{param}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FilmographySearchallReadResponse res = new openapisdk.models.operations.FilmographySearchallReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}