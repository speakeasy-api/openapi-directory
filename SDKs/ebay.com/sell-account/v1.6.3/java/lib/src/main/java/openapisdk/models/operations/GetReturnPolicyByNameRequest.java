package openapisdk.models.operations;



public class GetReturnPolicyByNameRequest {
    public GetReturnPolicyByNameQueryParams queryParams;
    public GetReturnPolicyByNameRequest withQueryParams(GetReturnPolicyByNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReturnPolicyByNameSecurity security;
    public GetReturnPolicyByNameRequest withSecurity(GetReturnPolicyByNameSecurity security) {
        this.security = security;
        return this;
    }
}