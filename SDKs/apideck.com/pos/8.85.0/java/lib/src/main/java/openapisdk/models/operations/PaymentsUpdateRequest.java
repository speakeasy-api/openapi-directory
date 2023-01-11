package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsUpdateRequest {
    public PaymentsUpdatePathParams pathParams;
    public PaymentsUpdateRequest withPathParams(PaymentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PaymentsUpdateQueryParams queryParams;
    public PaymentsUpdateRequest withQueryParams(PaymentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PaymentsUpdateHeaders headers;
    public PaymentsUpdateRequest withHeaders(PaymentsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PosPaymentInput request;
    public PaymentsUpdateRequest withRequest(openapisdk.models.shared.PosPaymentInput request) {
        this.request = request;
        return this;
    }
    public PaymentsUpdateSecurity security;
    public PaymentsUpdateRequest withSecurity(PaymentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}