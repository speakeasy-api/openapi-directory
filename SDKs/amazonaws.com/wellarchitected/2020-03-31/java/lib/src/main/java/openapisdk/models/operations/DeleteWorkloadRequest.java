package openapisdk.models.operations;



public class DeleteWorkloadRequest {
    public DeleteWorkloadPathParams pathParams;
    public DeleteWorkloadRequest withPathParams(DeleteWorkloadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkloadQueryParams queryParams;
    public DeleteWorkloadRequest withQueryParams(DeleteWorkloadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteWorkloadHeaders headers;
    public DeleteWorkloadRequest withHeaders(DeleteWorkloadHeaders headers) {
        this.headers = headers;
        return this;
    }
}