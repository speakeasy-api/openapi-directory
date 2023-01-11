package openapisdk.models.operations;



public class ListAccessPoliciesRequest {
    public ListAccessPoliciesQueryParams queryParams;
    public ListAccessPoliciesRequest withQueryParams(ListAccessPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccessPoliciesHeaders headers;
    public ListAccessPoliciesRequest withHeaders(ListAccessPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}