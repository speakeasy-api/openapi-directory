package openapisdk.models.operations;



public class GetFulfillmentPolicyRequest {
    public GetFulfillmentPolicyPathParams pathParams;
    public GetFulfillmentPolicyRequest withPathParams(GetFulfillmentPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFulfillmentPolicySecurity security;
    public GetFulfillmentPolicyRequest withSecurity(GetFulfillmentPolicySecurity security) {
        this.security = security;
        return this;
    }
}