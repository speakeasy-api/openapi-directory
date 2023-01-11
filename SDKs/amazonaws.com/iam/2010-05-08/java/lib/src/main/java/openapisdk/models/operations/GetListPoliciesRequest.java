package openapisdk.models.operations;



public class GetListPoliciesRequest {
    public GetListPoliciesQueryParams queryParams;
    public GetListPoliciesRequest withQueryParams(GetListPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListPoliciesHeaders headers;
    public GetListPoliciesRequest withHeaders(GetListPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}