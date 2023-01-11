package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsAddRequest {
    public PaymentsAddQueryParams queryParams;
    public PaymentsAddRequest withQueryParams(PaymentsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PaymentsAddHeaders headers;
    public PaymentsAddRequest withHeaders(PaymentsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosPaymentInput request;
    public PaymentsAddRequest withRequest(openapisdk.models.shared.PosPaymentInput request) {
        this.request = request;
        return this;
    }
    public PaymentsAddSecurity security;
    public PaymentsAddRequest withSecurity(PaymentsAddSecurity security) {
        this.security = security;
        return this;
    }
}