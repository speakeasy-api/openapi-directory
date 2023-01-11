package openapisdk.models.operations;



public class GetPaymentDisputeRequest {
    public String serverURL;
    public GetPaymentDisputeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public GetPaymentDisputePathParams pathParams;
    public GetPaymentDisputeRequest withPathParams(GetPaymentDisputePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentDisputeSecurity security;
    public GetPaymentDisputeRequest withSecurity(GetPaymentDisputeSecurity security) {
        this.security = security;
        return this;
    }
}