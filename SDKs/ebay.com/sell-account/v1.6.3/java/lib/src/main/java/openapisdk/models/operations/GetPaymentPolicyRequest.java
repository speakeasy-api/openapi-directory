package openapisdk.models.operations;



public class GetPaymentPolicyRequest {
    public GetPaymentPolicyPathParams pathParams;
    public GetPaymentPolicyRequest withPathParams(GetPaymentPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentPolicySecurity security;
    public GetPaymentPolicyRequest withSecurity(GetPaymentPolicySecurity security) {
        this.security = security;
        return this;
    }
}