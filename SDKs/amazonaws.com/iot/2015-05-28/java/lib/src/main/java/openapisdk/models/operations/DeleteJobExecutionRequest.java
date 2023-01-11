package openapisdk.models.operations;



public class DeleteJobExecutionRequest {
    public DeleteJobExecutionPathParams pathParams;
    public DeleteJobExecutionRequest withPathParams(DeleteJobExecutionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteJobExecutionQueryParams queryParams;
    public DeleteJobExecutionRequest withQueryParams(DeleteJobExecutionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteJobExecutionHeaders headers;
    public DeleteJobExecutionRequest withHeaders(DeleteJobExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
}