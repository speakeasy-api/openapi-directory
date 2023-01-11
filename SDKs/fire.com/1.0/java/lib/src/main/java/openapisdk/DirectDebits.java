package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class DirectDebits {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public DirectDebits(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * activateMandate - Activate a direct debit mandate
     *
     * This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
     * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
     * 
    **/
    public openapisdk.models.operations.ActivateMandateResponse activateMandate(openapisdk.models.operations.ActivateMandateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mandates/{mandateUuid}/activate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActivateMandateResponse res = new openapisdk.models.operations.ActivateMandateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * cancelMandateByUuid - Cancel a direct debit mandate
     *
     * This endpoint allows you to cancel a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
     * 
    **/
    public openapisdk.models.operations.CancelMandateByUuidResponse cancelMandateByUuid(openapisdk.models.operations.CancelMandateByUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mandates/{mandateUuid}/cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CancelMandateByUuidResponse res = new openapisdk.models.operations.CancelMandateByUuidResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getDirectDebitByUuid - Get the deails of a direct debit
     *
     * Retrieve all details of a single direct debit collection/payment, whether successful or not.
     * The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
     * 
    **/
    public openapisdk.models.operations.GetDirectDebitByUuidResponse getDirectDebitByUuid(openapisdk.models.operations.GetDirectDebitByUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/directdebits/{directDebitUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDirectDebitByUuidResponse res = new openapisdk.models.operations.GetDirectDebitByUuidResponse() {{
            onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.class);
                res.onedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDirectDebitMandates - List all direct debit mandates
     *
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
     * 
    **/
    public openapisdk.models.operations.GetDirectDebitMandatesResponse getDirectDebitMandates() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mandates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDirectDebitMandatesResponse res = new openapisdk.models.operations.GetDirectDebitMandatesResponse() {{
            mandates = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetDirectDebitMandatesMandates out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetDirectDebitMandatesMandates.class);
                res.mandates = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDirectDebitsForMandateUuid - Get all DD payments associated with a direct debit mandate
     *
     * Retrieve all direct debit payments associated with a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
     * 
    **/
    public openapisdk.models.operations.GetDirectDebitsForMandateUuidResponse getDirectDebitsForMandateUuid(openapisdk.models.operations.GetDirectDebitsForMandateUuidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/directdebits");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDirectDebitsForMandateUuidResponse res = new openapisdk.models.operations.GetDirectDebitsForMandateUuidResponse() {{
            directDebits = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetDirectDebitsForMandateUuidDirectDebits out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetDirectDebitsForMandateUuidDirectDebits.class);
                res.directDebits = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMandate - Get direct debit mandate details
     *
     * Retrieve all details for a direct debit mandate.
     * The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
     * 
    **/
    public openapisdk.models.operations.GetMandateResponse getMandate(openapisdk.models.operations.GetMandateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mandates/{mandateUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMandateResponse res = new openapisdk.models.operations.GetMandateResponse() {{
            onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems.class);
                res.onemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = out;
            }
        }

        return res;
    }
	
	
    /**
     * rejectDirectDebit - Reject a direct debit payment
     *
     * This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
     * Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
     * 
    **/
    public openapisdk.models.operations.RejectDirectDebitResponse rejectDirectDebit(openapisdk.models.operations.RejectDirectDebitRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/directdebits/{directDebitUuid}/reject", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RejectDirectDebitResponse res = new openapisdk.models.operations.RejectDirectDebitResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * updateMandateAlias - Update a direct debit mandate alias
     *
     * Update Direct Debit Mandate Alias
     * The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
     * 
    **/
    public openapisdk.models.operations.UpdateMandateAliasResponse updateMandateAlias(openapisdk.models.operations.UpdateMandateAliasRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mandates/{mandateUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMandateAliasResponse res = new openapisdk.models.operations.UpdateMandateAliasResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
}