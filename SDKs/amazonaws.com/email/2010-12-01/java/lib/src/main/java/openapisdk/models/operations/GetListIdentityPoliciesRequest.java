package openapisdk.models.operations;



public class GetListIdentityPoliciesRequest {
    public GetListIdentityPoliciesQueryParams queryParams;
    public GetListIdentityPoliciesRequest withQueryParams(GetListIdentityPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListIdentityPoliciesHeaders headers;
    public GetListIdentityPoliciesRequest withHeaders(GetListIdentityPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}