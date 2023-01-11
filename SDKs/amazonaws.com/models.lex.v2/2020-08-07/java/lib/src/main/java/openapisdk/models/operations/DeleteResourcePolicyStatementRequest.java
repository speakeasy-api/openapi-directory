package openapisdk.models.operations;



public class DeleteResourcePolicyStatementRequest {
    public DeleteResourcePolicyStatementPathParams pathParams;
    public DeleteResourcePolicyStatementRequest withPathParams(DeleteResourcePolicyStatementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteResourcePolicyStatementQueryParams queryParams;
    public DeleteResourcePolicyStatementRequest withQueryParams(DeleteResourcePolicyStatementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteResourcePolicyStatementHeaders headers;
    public DeleteResourcePolicyStatementRequest withHeaders(DeleteResourcePolicyStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
}