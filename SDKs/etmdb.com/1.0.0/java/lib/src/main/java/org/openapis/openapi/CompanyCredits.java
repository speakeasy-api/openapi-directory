/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import java.net.http.HttpResponse;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;

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
     * Return company credits search result
     * Return company credits search result
     * 
     * ### Response Class (Status 200)
     * 
     * * __{movie_title}__: Used as a key word to search company credits for the movie
     * * You can use both Amharic or English charset/font to search
     * 
     * For more details on how company credits are listed [see here][ref].
     * [ref]: https://etmdb.com/en/movie-list/-updated_date
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.CompanyCreditsSearchReadResponse companyCreditsSearchRead(org.openapis.openapi.models.operations.CompanyCreditsSearchReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.CompanyCreditsSearchReadRequest.class, baseUrl, "/api/v1/company-credits/search/{movie_title}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.CompanyCreditsSearchReadResponse res = new org.openapis.openapi.models.operations.CompanyCreditsSearchReadResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }

    /**
     * Return company credits search result
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
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.CompanyCreditsSearchallReadResponse companyCreditsSearchallRead(org.openapis.openapi.models.operations.CompanyCreditsSearchallReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.CompanyCreditsSearchallReadRequest.class, baseUrl, "/api/v1/company-credits/searchall/{param}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.CompanyCreditsSearchallReadResponse res = new org.openapis.openapi.models.operations.CompanyCreditsSearchallReadResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
}