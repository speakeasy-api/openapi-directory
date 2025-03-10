/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.function.Function;
import java.util.stream.Collectors;
import org.apache.http.NameValuePair;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;

public class NegativeKeyword {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public NegativeKeyword(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * &lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to &lt;a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "&gt; Promoted Listings Advanced Access Requests&lt;/a&gt; in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the &lt;a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank "&gt;getAdvertisingEligibility&lt;/a&gt; method in Account API.&lt;/span&gt;&lt;br /&gt;This method adds negative keywords, in bulk, to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.&lt;br /&gt;&lt;br /&gt;Specify the &lt;b&gt;campaignId&lt;/b&gt; and &lt;b&gt;adGroupId&lt;/b&gt; in the request body, along with the &lt;b&gt;negativeKeywordText&lt;/b&gt; and &lt;b&gt;negativeKeywordMatchType&lt;/b&gt;.&lt;br /&gt;&lt;br /&gt;Call the &lt;a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns"&gt;getCampaigns&lt;/a&gt; method to retrieve a list of current campaign IDs for a specified seller.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.BulkCreateNegativeKeywordResponse bulkCreateNegativeKeyword(org.openapis.openapi.models.shared.BulkCreateNegativeKeywordRequest request, org.openapis.openapi.models.operations.BulkCreateNegativeKeywordSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/bulk_create_negative_keyword");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "request", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.BulkCreateNegativeKeywordResponse res = new org.openapis.openapi.models.operations.BulkCreateNegativeKeywordResponse() {{
            bulkCreateNegativeKeywordResponse = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BulkCreateNegativeKeywordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BulkCreateNegativeKeywordResponse.class);
                res.bulkCreateNegativeKeywordResponse = out;
            }
        }
        else if (httpRes.statusCode() == 207 || httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 409 || httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * &lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to &lt;a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "&gt; Promoted Listings Advanced Access Requests&lt;/a&gt; in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the &lt;a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank "&gt;getAdvertisingEligibility&lt;/a&gt; method in Account API.&lt;/span&gt;&lt;br /&gt;This method updates the statuses of existing negative keywords, in bulk.&lt;br /&gt;&lt;br /&gt;Specify the &lt;b&gt;negativeKeywordId&lt;/b&gt; and &lt;b&gt;negativeKeywordStatus&lt;/b&gt; in the request body.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.BulkUpdateNegativeKeywordResponse bulkUpdateNegativeKeyword(org.openapis.openapi.models.shared.BulkUpdateNegativeKeywordRequest request, org.openapis.openapi.models.operations.BulkUpdateNegativeKeywordSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/bulk_update_negative_keyword");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "request", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.BulkUpdateNegativeKeywordResponse res = new org.openapis.openapi.models.operations.BulkUpdateNegativeKeywordResponse() {{
            bulkUpdateNegativeKeywordResponse = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BulkUpdateNegativeKeywordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BulkUpdateNegativeKeywordResponse.class);
                res.bulkUpdateNegativeKeywordResponse = out;
            }
        }
        else if (httpRes.statusCode() == 207 || httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 409 || httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * &lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to &lt;a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "&gt; Promoted Listings Advanced Access Requests&lt;/a&gt; in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the &lt;a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank "&gt;getAdvertisingEligibility&lt;/a&gt; method in Account API.&lt;/span&gt;&lt;br /&gt;This method adds a negative keyword to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.&lt;br /&gt;&lt;br /&gt;Specify the &lt;b&gt;campaignId&lt;/b&gt; and &lt;b&gt;adGroupId&lt;/b&gt; in the request body, along with the &lt;b&gt;negativeKeywordText&lt;/b&gt; and &lt;b&gt;negativeKeywordMatchType&lt;/b&gt;.&lt;br /&gt;&lt;br /&gt;Call the &lt;a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns"&gt;getCampaigns&lt;/a&gt; method to retrieve a list of current campaign IDs for a specified seller.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.CreateNegativeKeywordResponse createNegativeKeyword(org.openapis.openapi.models.shared.CreateNegativeKeywordRequest request, org.openapis.openapi.models.operations.CreateNegativeKeywordSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/negative_keyword");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "request", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.CreateNegativeKeywordResponse res = new org.openapis.openapi.models.operations.CreateNegativeKeywordResponse() {{
            createNegativeKeyword201ApplicationJSONObject = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), new TypeReference<java.util.Map<String, Object>>() {});
                res.createNegativeKeyword201ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 409 || httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * &lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to &lt;a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "&gt; Promoted Listings Advanced Access Requests&lt;/a&gt; in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the &lt;a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank "&gt;getAdvertisingEligibility&lt;/a&gt; method in Account API.&lt;/span&gt;&lt;br /&gt;This method retrieves details on a specific negative keyword.&lt;br /&gt;&lt;br /&gt;In the request, specify the &lt;b&gt;negative_keyword_id&lt;/b&gt; as a path parameter.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetNegativeKeywordResponse getNegativeKeyword(org.openapis.openapi.models.operations.GetNegativeKeywordRequest request, org.openapis.openapi.models.operations.GetNegativeKeywordSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetNegativeKeywordRequest.class, baseUrl, "/negative_keyword/{negative_keyword_id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetNegativeKeywordResponse res = new org.openapis.openapi.models.operations.GetNegativeKeywordResponse() {{
            negativeKeyword = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.NegativeKeyword out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.NegativeKeyword.class);
                res.negativeKeyword = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 404 || httpRes.statusCode() == 409 || httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * &lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to &lt;a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "&gt; Promoted Listings Advanced Access Requests&lt;/a&gt; in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the &lt;a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank "&gt;getAdvertisingEligibility&lt;/a&gt; method in Account API.&lt;/span&gt;&lt;br /&gt;This method can be used to retrieve all of the negative keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.&lt;br /&gt;&lt;br /&gt;The results can be filtered using the &lt;b&gt;campaign_ids&lt;/b&gt;, &lt;b&gt;ad_group_ids&lt;/b&gt;, and &lt;b&gt;negative_keyword_status&lt;/b&gt; query parameters.&lt;br /&gt;&lt;br /&gt;Call the &lt;a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns"&gt;getCampaigns&lt;/a&gt; method to retrieve a list of current campaign IDs for a seller.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetNegativeKeywordsResponse getNegativeKeywords(org.openapis.openapi.models.operations.GetNegativeKeywordsRequest request, org.openapis.openapi.models.operations.GetNegativeKeywordsSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/negative_keyword");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.GetNegativeKeywordsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetNegativeKeywordsResponse res = new org.openapis.openapi.models.operations.GetNegativeKeywordsResponse() {{
            negativeKeywordPagedCollectionResponse = null;
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.NegativeKeywordPagedCollectionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.NegativeKeywordPagedCollectionResponse.class);
                res.negativeKeywordPagedCollectionResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 404 || httpRes.statusCode() == 409 || httpRes.statusCode() == 500) {
        }

        return res;
    }

    /**
     * &lt;span class="tablenote"&gt;&lt;b&gt;Note:&lt;/b&gt; This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to &lt;a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "&gt; Promoted Listings Advanced Access Requests&lt;/a&gt; in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the &lt;a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank "&gt;getAdvertisingEligibility&lt;/a&gt; method in Account API.&lt;/span&gt;&lt;br /&gt;This method updates the status of an existing negative keyword.&lt;br /&gt;&lt;br /&gt;Specify the &lt;b&gt;negative_keyword_id&lt;/b&gt; as a path parameter, and specify the &lt;b&gt;negativeKeywordStatus&lt;/b&gt; in the request body.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.UpdateNegativeKeywordResponse updateNegativeKeyword(org.openapis.openapi.models.operations.UpdateNegativeKeywordRequest request, org.openapis.openapi.models.operations.UpdateNegativeKeywordSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.UpdateNegativeKeywordRequest.class, baseUrl, "/negative_keyword/{negative_keyword_id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "updateNegativeKeywordRequest", "json");
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.UpdateNegativeKeywordResponse res = new org.openapis.openapi.models.operations.UpdateNegativeKeywordResponse() {{
        }};
        res.statusCode = httpRes.statusCode();
        res.contentType = contentType;
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 204 || httpRes.statusCode() == 400 || httpRes.statusCode() == 403 || httpRes.statusCode() == 404 || httpRes.statusCode() == 409 || httpRes.statusCode() == 500) {
        }

        return res;
    }
}