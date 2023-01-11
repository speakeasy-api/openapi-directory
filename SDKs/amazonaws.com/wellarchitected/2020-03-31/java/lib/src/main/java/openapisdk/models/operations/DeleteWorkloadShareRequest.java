package openapisdk.models.operations;



public class DeleteWorkloadShareRequest {
    public DeleteWorkloadSharePathParams pathParams;
    public DeleteWorkloadShareRequest withPathParams(DeleteWorkloadSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkloadShareQueryParams queryParams;
    public DeleteWorkloadShareRequest withQueryParams(DeleteWorkloadShareQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteWorkloadShareHeaders headers;
    public DeleteWorkloadShareRequest withHeaders(DeleteWorkloadShareHeaders headers) {
        this.headers = headers;
        return this;
    }
}