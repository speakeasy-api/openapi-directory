package openapisdk.models.operations;



public class ListPrincipalPoliciesRequest {
    public ListPrincipalPoliciesQueryParams queryParams;
    public ListPrincipalPoliciesRequest withQueryParams(ListPrincipalPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPrincipalPoliciesHeaders headers;
    public ListPrincipalPoliciesRequest withHeaders(ListPrincipalPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}