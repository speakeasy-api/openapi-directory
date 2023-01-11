package openapisdk.models.operations;



public class DeleteFulfillmentPolicyRequest {
    public DeleteFulfillmentPolicyPathParams pathParams;
    public DeleteFulfillmentPolicyRequest withPathParams(DeleteFulfillmentPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFulfillmentPolicySecurity security;
    public DeleteFulfillmentPolicyRequest withSecurity(DeleteFulfillmentPolicySecurity security) {
        this.security = security;
        return this;
    }
}