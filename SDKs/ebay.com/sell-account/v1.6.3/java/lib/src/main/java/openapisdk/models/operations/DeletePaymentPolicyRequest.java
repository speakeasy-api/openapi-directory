package openapisdk.models.operations;



public class DeletePaymentPolicyRequest {
    public DeletePaymentPolicyPathParams pathParams;
    public DeletePaymentPolicyRequest withPathParams(DeletePaymentPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePaymentPolicySecurity security;
    public DeletePaymentPolicyRequest withSecurity(DeletePaymentPolicySecurity security) {
        this.security = security;
        return this;
    }
}