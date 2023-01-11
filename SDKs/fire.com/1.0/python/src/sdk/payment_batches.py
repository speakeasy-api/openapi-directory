import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PaymentBatches:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def add_bank_transfer_batch_payment(self, request: operations.AddBankTransferBatchPaymentRequest) -> operations.AddBankTransferBatchPaymentResponse:
        r"""Add payment for an bank transfers
        There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
        
        **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
        
        **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/banktransfers", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBankTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema])
                res.onebatches_1_percent_7_bbatch_uuid_percent_7_d_1internaltransfers_post_responses_200_content_application_1json_schema = out

        return res

    
    def add_internal_transfer_batch_payment(self, request: operations.AddInternalTransferBatchPaymentRequest) -> operations.AddInternalTransferBatchPaymentResponse:
        r"""Add payment for an internal transfers
        Simply specify the source account, destination account, amount and a reference.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/internaltransfers", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddInternalTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddInternalTransferBatchPaymentNewBatchItemResponse])
                res.new_batch_item_response = out

        return res

    
    def cancel_batch_payment(self, request: operations.CancelBatchPaymentRequest) -> operations.CancelBatchPaymentResponse:
        r"""Cancel a batch
        Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def create_batch_payment(self, request: operations.CreateBatchPaymentRequest) -> operations.CreateBatchPaymentResponse:
        r"""Create a new bath of payments
        This is the first step in creating a batch payment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batches"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateBatchPaymentNewBatchResponse])
                res.new_batch_response = out

        return res

    
    def delete_bank_transfer_batch_payment(self, request: operations.DeleteBankTransferBatchPaymentRequest) -> operations.DeleteBankTransferBatchPaymentResponse:
        r"""Remove a Payment from the Batch (Bank Transfers)
        Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/banktransfers/{itemUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBankTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_internal_transfer_batch_payment(self, request: operations.DeleteInternalTransferBatchPaymentRequest) -> operations.DeleteInternalTransferBatchPaymentResponse:
        r"""Remove a Payment from the Batch (Internal Transfer)
        Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/internaltransfers/{itemUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInternalTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_batches(self, request: operations.GetBatchesRequest) -> operations.GetBatchesResponse:
        r"""List batches
        Returns the list of batch with the specified types and statuses.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batches"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchesBatchItems])
                res.batch_items = out

        return res

    
    def get_details_single_batch(self, request: operations.GetDetailsSingleBatchRequest) -> operations.GetDetailsSingleBatchResponse:
        r"""Get details of a single Batch
        Returns the details of the batch specified in the API endpoint - {batchUuid}.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsSingleBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems])
                res.onebatches_get_responses_200_content_application_1json_schema_properties_items_items = out

        return res

    
    def get_items_batch_bank_transfer(self, request: operations.GetItemsBatchBankTransferRequest) -> operations.GetItemsBatchBankTransferResponse:
        r"""List items in a Batch
        Returns a paginated list of items in the specified batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/banktransfers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemsBatchBankTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema])
                res.onebatches_get_responses_200_content_application_1json_schema = out

        return res

    
    def get_items_batch_internal_trasnfer(self, request: operations.GetItemsBatchInternalTrasnferRequest) -> operations.GetItemsBatchInternalTrasnferResponse:
        r"""List items in a Batch
        Returns a paginated list of items in the specified batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/internaltransfers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemsBatchInternalTrasnferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema])
                res.onebatches_get_responses_200_content_application_1json_schema = out

        return res

    
    def get_listof_approvers_for_batch(self, request: operations.GetListofApproversForBatchRequest) -> operations.GetListofApproversForBatchResponse:
        r"""List Approvers for a Batch
        Returns a list of approvers for this batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/approvals", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListofApproversForBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListofApproversForBatchBatchApprovers])
                res.batch_approvers = out

        return res

    
    def submit_batch(self) -> operations.SubmitBatchResponse:
        r"""Submit a batch for approval
        Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
        
        You can only submit a batch while it is in the OPEN state.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batches"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    