package openapisdk.models.operations;



public class ListPoliciesRequest {
    public ListPoliciesQueryParams queryParams;
    public ListPoliciesRequest withQueryParams(ListPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPoliciesHeaders headers;
    public ListPoliciesRequest withHeaders(ListPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}