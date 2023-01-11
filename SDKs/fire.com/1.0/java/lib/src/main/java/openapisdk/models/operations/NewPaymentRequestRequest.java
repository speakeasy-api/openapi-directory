package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewPaymentRequestRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NewPaymentRequestNewPaymentRequest request;
    public NewPaymentRequestRequest withRequest(NewPaymentRequestNewPaymentRequest request) {
        this.request = request;
        return this;
    }
}