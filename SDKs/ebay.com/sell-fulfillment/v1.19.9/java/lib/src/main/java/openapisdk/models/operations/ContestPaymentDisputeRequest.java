package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContestPaymentDisputeRequest {
    public String serverURL;
    public ContestPaymentDisputeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ContestPaymentDisputePathParams pathParams;
    public ContestPaymentDisputeRequest withPathParams(ContestPaymentDisputePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContestPaymentDisputeRequest request;
    public ContestPaymentDisputeRequest withRequest(openapisdk.models.shared.ContestPaymentDisputeRequest request) {
        this.request = request;
        return this;
    }
    public ContestPaymentDisputeSecurity security;
    public ContestPaymentDisputeRequest withSecurity(ContestPaymentDisputeSecurity security) {
        this.security = security;
        return this;
    }
}