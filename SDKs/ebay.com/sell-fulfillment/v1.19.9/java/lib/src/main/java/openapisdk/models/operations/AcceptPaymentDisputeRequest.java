package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptPaymentDisputeRequest {
    public String serverURL;
    public AcceptPaymentDisputeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public AcceptPaymentDisputePathParams pathParams;
    public AcceptPaymentDisputeRequest withPathParams(AcceptPaymentDisputePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptPaymentDisputeRequest request;
    public AcceptPaymentDisputeRequest withRequest(openapisdk.models.shared.AcceptPaymentDisputeRequest request) {
        this.request = request;
        return this;
    }
    public AcceptPaymentDisputeSecurity security;
    public AcceptPaymentDisputeRequest withSecurity(AcceptPaymentDisputeSecurity security) {
        this.security = security;
        return this;
    }
}