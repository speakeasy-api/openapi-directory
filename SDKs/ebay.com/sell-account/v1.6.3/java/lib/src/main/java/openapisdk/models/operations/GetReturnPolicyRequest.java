package openapisdk.models.operations;



public class GetReturnPolicyRequest {
    public GetReturnPolicyPathParams pathParams;
    public GetReturnPolicyRequest withPathParams(GetReturnPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetReturnPolicySecurity security;
    public GetReturnPolicyRequest withSecurity(GetReturnPolicySecurity security) {
        this.security = security;
        return this;
    }
}