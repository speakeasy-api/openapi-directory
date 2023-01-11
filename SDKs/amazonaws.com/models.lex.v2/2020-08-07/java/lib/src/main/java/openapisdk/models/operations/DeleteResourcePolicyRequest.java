package openapisdk.models.operations;



public class DeleteResourcePolicyRequest {
    public DeleteResourcePolicyPathParams pathParams;
    public DeleteResourcePolicyRequest withPathParams(DeleteResourcePolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteResourcePolicyQueryParams queryParams;
    public DeleteResourcePolicyRequest withQueryParams(DeleteResourcePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteResourcePolicyHeaders headers;
    public DeleteResourcePolicyRequest withHeaders(DeleteResourcePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}