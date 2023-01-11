package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class CompanyCredits {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CompanyCredits(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * companyCreditsSearchRead - Return company credits search result
     *
     * Return company credits search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{movie_title}__: Used as a key word to search company credits for the movie
     * * You can use both Amharic or English charset/font to search
     * 
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
    **/
    public openapisdk.models.operations.CompanyCreditsSearchReadResponse companyCreditsSearchRead(openapisdk.models.operations.CompanyCreditsSearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/company-credits/search/{movie_title}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CompanyCreditsSearchReadResponse res = new openapisdk.models.operations.CompanyCreditsSearchReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * companyCreditsSearchallRead - Return company credits search result
     *
     * Return company credits search result
     * 
     * ### Response Class (Status 200)
     * __{param}__ argument can be
     * * company name
     * * movie title or
     * * company credit description (such as production, cinematography, etc)
     * 
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/company-list/company_name
    **/
    public openapisdk.models.operations.CompanyCreditsSearchallReadResponse companyCreditsSearchallRead(openapisdk.models.operations.CompanyCreditsSearchallReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/company-credits/searchall/{param}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CompanyCreditsSearchallReadResponse res = new openapisdk.models.operations.CompanyCreditsSearchallReadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}