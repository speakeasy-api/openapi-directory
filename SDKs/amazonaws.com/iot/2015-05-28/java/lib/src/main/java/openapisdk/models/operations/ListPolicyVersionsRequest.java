package openapisdk.models.operations;



public class ListPolicyVersionsRequest {
    public ListPolicyVersionsPathParams pathParams;
    public ListPolicyVersionsRequest withPathParams(ListPolicyVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListPolicyVersionsHeaders headers;
    public ListPolicyVersionsRequest withHeaders(ListPolicyVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}