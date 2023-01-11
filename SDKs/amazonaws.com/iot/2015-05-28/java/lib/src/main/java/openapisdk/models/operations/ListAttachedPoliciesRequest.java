package openapisdk.models.operations;



public class ListAttachedPoliciesRequest {
    public ListAttachedPoliciesPathParams pathParams;
    public ListAttachedPoliciesRequest withPathParams(ListAttachedPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAttachedPoliciesQueryParams queryParams;
    public ListAttachedPoliciesRequest withQueryParams(ListAttachedPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAttachedPoliciesHeaders headers;
    public ListAttachedPoliciesRequest withHeaders(ListAttachedPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}