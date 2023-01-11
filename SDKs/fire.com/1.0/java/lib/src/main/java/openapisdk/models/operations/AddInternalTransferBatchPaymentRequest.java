package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddInternalTransferBatchPaymentRequest {
    public AddInternalTransferBatchPaymentPathParams pathParams;
    public AddInternalTransferBatchPaymentRequest withPathParams(AddInternalTransferBatchPaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddInternalTransferBatchPaymentBatchItemInternalTransfer request;
    public AddInternalTransferBatchPaymentRequest withRequest(AddInternalTransferBatchPaymentBatchItemInternalTransfer request) {
        this.request = request;
        return this;
    }
}