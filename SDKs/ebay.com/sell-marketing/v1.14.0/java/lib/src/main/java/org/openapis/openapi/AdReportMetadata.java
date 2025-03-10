/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;

public class AdReportMetadata {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AdReportMetadata(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports.&lt;/br&gt;&lt;/br&gt;The request for this method does not use a payload or any URI parameters.&lt;br/&gt;&lt;br/&gt;&lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; The reporting of some data related to sales and ad-fees may require a 72-hour (&lt;b&gt;maximum&lt;/b&gt;) adjustment period which is often referred to as the &lt;i&gt;Reconciliation Period&lt;/i&gt;. Such adjustment periods should, on average, be minimal. However, at any given time, the &lt;b&gt;payments&lt;/b&gt; tab may be used to view those amounts that have actually been charged.&lt;/span&gt;
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetReportMetadataResponse getReportMetadata() throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/ad_report_metadata");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetReportMetadataResponse res = new org.openapis.openapi.models.operations.GetReportMetadataResponse() {{
            reportMetadatas = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ReportMetadatas out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ReportMetadatas.class);
                res.reportMetadatas = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the &lt;b&gt;report_type&lt;/b&gt; path parameter to indicate metadata to retrieve.&lt;br/&gt;&lt;br/&gt;This method does not use a request payload.&lt;br/&gt;&lt;br/&gt;&lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; The reporting of some data related to sales and ad-fees may require a 72-hour (&lt;b&gt;maximum&lt;/b&gt;) adjustment period which is often referred to as the &lt;i&gt;Reconciliation Period&lt;/i&gt;. Such adjustment periods should, on average, be minimal. However, at any given time, the &lt;b&gt;payments&lt;/b&gt; tab may be used to view those amounts that have actually been charged.&lt;/span&gt;
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetReportMetadataForReportTypeResponse getReportMetadataForReportType(org.openapis.openapi.models.operations.GetReportMetadataForReportTypeRequest request, org.openapis.openapi.models.operations.GetReportMetadataForReportTypeSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetReportMetadataForReportTypeRequest.class, baseUrl, "/ad_report_metadata/{report_type}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetReportMetadataForReportTypeResponse res = new org.openapis.openapi.models.operations.GetReportMetadataForReportTypeResponse() {{
            reportMetadata = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ReportMetadata out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ReportMetadata.class);
                res.reportMetadata = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 404 || httpRes.statusCode() == 500) {
        }

        return res;
    }
}