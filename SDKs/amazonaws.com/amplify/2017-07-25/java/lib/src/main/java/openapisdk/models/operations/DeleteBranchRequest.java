package openapisdk.models.operations;



public class DeleteBranchRequest {
    public DeleteBranchPathParams pathParams;
    public DeleteBranchRequest withPathParams(DeleteBranchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBranchHeaders headers;
    public DeleteBranchRequest withHeaders(DeleteBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
}