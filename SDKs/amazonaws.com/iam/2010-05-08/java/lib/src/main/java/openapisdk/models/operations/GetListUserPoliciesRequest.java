package openapisdk.models.operations;



public class GetListUserPoliciesRequest {
    public GetListUserPoliciesQueryParams queryParams;
    public GetListUserPoliciesRequest withQueryParams(GetListUserPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListUserPoliciesHeaders headers;
    public GetListUserPoliciesRequest withHeaders(GetListUserPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}