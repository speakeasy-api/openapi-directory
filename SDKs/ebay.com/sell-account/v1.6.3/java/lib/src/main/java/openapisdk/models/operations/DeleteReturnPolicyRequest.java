package openapisdk.models.operations;



public class DeleteReturnPolicyRequest {
    public DeleteReturnPolicyPathParams pathParams;
    public DeleteReturnPolicyRequest withPathParams(DeleteReturnPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteReturnPolicySecurity security;
    public DeleteReturnPolicyRequest withSecurity(DeleteReturnPolicySecurity security) {
        this.security = security;
        return this;
    }
}