package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentRequest {
    public UpdatePaymentPathParams pathParams;
    public UpdatePaymentRequest withPathParams(UpdatePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PaymentHistory[] request;
    public UpdatePaymentRequest withRequest(openapisdk.models.shared.PaymentHistory[] request) {
        this.request = request;
        return this;
    }
}