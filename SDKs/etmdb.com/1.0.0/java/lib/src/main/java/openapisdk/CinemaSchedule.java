package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class CinemaSchedule {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CinemaSchedule(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * cinemaScheduleSearchRead - Return cinema schedule search result
     *
     * Return cinema schedule search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{movie_title}__: Used as a key word to search movie cast
     * * You can use both Amharic or English charset/font to search
     * 
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    public openapisdk.models.operations.CinemaScheduleSearchReadResponse cinemaScheduleSearchRead(openapisdk.models.operations.CinemaScheduleSearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/cinema-schedule/search/{movie_title}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CinemaScheduleSearchReadResponse res = new openapisdk.models.operations.CinemaScheduleSearchReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * cinemaScheduleSearchallRead - Return cinema schedule search result
     *
     * Return cinema schedule search result
     * 
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * movie title
     * * cinema name
     * * cinema hall name or
     * * cinema technology
     * 
     * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    public openapisdk.models.operations.CinemaScheduleSearchallReadResponse cinemaScheduleSearchallRead(openapisdk.models.operations.CinemaScheduleSearchallReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/cinema-schedule/searchall/{param}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CinemaScheduleSearchallReadResponse res = new openapisdk.models.operations.CinemaScheduleSearchallReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}