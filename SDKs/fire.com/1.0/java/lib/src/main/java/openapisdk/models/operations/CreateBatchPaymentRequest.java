package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchPaymentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBatchPaymentNewBatch request;
    public CreateBatchPaymentRequest withRequest(CreateBatchPaymentNewBatch request) {
        this.request = request;
        return this;
    }
}