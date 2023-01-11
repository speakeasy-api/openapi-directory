package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class PaymentBatches {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PaymentBatches(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addBankTransferBatchPayment - Add payment for an bank transfers
     *
     * There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
     * 
     * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
     * 
     * **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
     * 
    **/
    public openapisdk.models.operations.AddBankTransferBatchPaymentResponse addBankTransferBatchPayment(openapisdk.models.operations.AddBankTransferBatchPaymentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/banktransfers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddBankTransferBatchPaymentResponse res = new openapisdk.models.operations.AddBankTransferBatchPaymentResponse() {{
            onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema.class);
                res.onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * addInternalTransferBatchPayment - Add payment for an internal transfers
     *
     * Simply specify the source account, destination account, amount and a reference.
    **/
    public openapisdk.models.operations.AddInternalTransferBatchPaymentResponse addInternalTransferBatchPayment(openapisdk.models.operations.AddInternalTransferBatchPaymentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/internaltransfers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddInternalTransferBatchPaymentResponse res = new openapisdk.models.operations.AddInternalTransferBatchPaymentResponse() {{
            newBatchItemResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddInternalTransferBatchPaymentNewBatchItemResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddInternalTransferBatchPaymentNewBatchItemResponse.class);
                res.newBatchItemResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * cancelBatchPayment - Cancel a batch
     *
     * Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
    **/
    public openapisdk.models.operations.CancelBatchPaymentResponse cancelBatchPayment(openapisdk.models.operations.CancelBatchPaymentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CancelBatchPaymentResponse res = new openapisdk.models.operations.CancelBatchPaymentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * createBatchPayment - Create a new bath of payments
     *
     * This is the first step in creating a batch payment.
    **/
    public openapisdk.models.operations.CreateBatchPaymentResponse createBatchPayment(openapisdk.models.operations.CreateBatchPaymentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateBatchPaymentResponse res = new openapisdk.models.operations.CreateBatchPaymentResponse() {{
            newBatchResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateBatchPaymentNewBatchResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateBatchPaymentNewBatchResponse.class);
                res.newBatchResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteBankTransferBatchPayment - Remove a Payment from the Batch (Bank Transfers)
     *
     * Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
    **/
    public openapisdk.models.operations.DeleteBankTransferBatchPaymentResponse deleteBankTransferBatchPayment(openapisdk.models.operations.DeleteBankTransferBatchPaymentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/banktransfers/{itemUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteBankTransferBatchPaymentResponse res = new openapisdk.models.operations.DeleteBankTransferBatchPaymentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * deleteInternalTransferBatchPayment - Remove a Payment from the Batch (Internal Transfer)
     *
     * Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
    **/
    public openapisdk.models.operations.DeleteInternalTransferBatchPaymentResponse deleteInternalTransferBatchPayment(openapisdk.models.operations.DeleteInternalTransferBatchPaymentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/internaltransfers/{itemUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteInternalTransferBatchPaymentResponse res = new openapisdk.models.operations.DeleteInternalTransferBatchPaymentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getBatches - List batches
     *
     * Returns the list of batch with the specified types and statuses.
     * 
    **/
    public openapisdk.models.operations.GetBatchesResponse getBatches(openapisdk.models.operations.GetBatchesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches");
        
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

        openapisdk.models.operations.GetBatchesResponse res = new openapisdk.models.operations.GetBatchesResponse() {{
            batchItems = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBatchesBatchItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBatchesBatchItems.class);
                res.batchItems = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDetailsSingleBatch - Get details of a single Batch
     *
     * Returns the details of the batch specified in the API endpoint - {batchUuid}.
    **/
    public openapisdk.models.operations.GetDetailsSingleBatchResponse getDetailsSingleBatch(openapisdk.models.operations.GetDetailsSingleBatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDetailsSingleBatchResponse res = new openapisdk.models.operations.GetDetailsSingleBatchResponse() {{
            onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems.class);
                res.onebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems = out;
            }
        }

        return res;
    }
	
	
    /**
     * getItemsBatchBankTransfer - List items in a Batch
     *
     * Returns a paginated list of items in the specified batch.
    **/
    public openapisdk.models.operations.GetItemsBatchBankTransferResponse getItemsBatchBankTransfer(openapisdk.models.operations.GetItemsBatchBankTransferRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/banktransfers", request.pathParams);
        
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

        openapisdk.models.operations.GetItemsBatchBankTransferResponse res = new openapisdk.models.operations.GetItemsBatchBankTransferResponse() {{
            onebatchesGetResponses200ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchema.class);
                res.onebatchesGetResponses200ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * getItemsBatchInternalTrasnfer - List items in a Batch
     *
     * Returns a paginated list of items in the specified batch.
    **/
    public openapisdk.models.operations.GetItemsBatchInternalTrasnferResponse getItemsBatchInternalTrasnfer(openapisdk.models.operations.GetItemsBatchInternalTrasnferRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/internaltransfers", request.pathParams);
        
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

        openapisdk.models.operations.GetItemsBatchInternalTrasnferResponse res = new openapisdk.models.operations.GetItemsBatchInternalTrasnferResponse() {{
            onebatchesGetResponses200ContentApplication1jsonSchema = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchema out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OnebatchesGetResponses200ContentApplication1jsonSchema.class);
                res.onebatchesGetResponses200ContentApplication1jsonSchema = out;
            }
        }

        return res;
    }
	
	
    /**
     * getListofApproversForBatch - List Approvers for a Batch
     *
     * Returns a list of approvers for this batch.
    **/
    public openapisdk.models.operations.GetListofApproversForBatchResponse getListofApproversForBatch(openapisdk.models.operations.GetListofApproversForBatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches/{batchUuid}/approvals", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetListofApproversForBatchResponse res = new openapisdk.models.operations.GetListofApproversForBatchResponse() {{
            batchApprovers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetListofApproversForBatchBatchApprovers out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetListofApproversForBatchBatchApprovers.class);
                res.batchApprovers = out;
            }
        }

        return res;
    }
	
	
    /**
     * submitBatch - Submit a batch for approval
     *
     * Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
     * 
     * You can only submit a batch while it is in the OPEN state.
     * 
    **/
    public openapisdk.models.operations.SubmitBatchResponse submitBatch() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/batches");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SubmitBatchResponse res = new openapisdk.models.operations.SubmitBatchResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
}