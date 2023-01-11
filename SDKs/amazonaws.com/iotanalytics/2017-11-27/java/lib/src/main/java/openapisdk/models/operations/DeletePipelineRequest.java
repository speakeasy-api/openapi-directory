package openapisdk.models.operations;



public class DeletePipelineRequest {
    public DeletePipelinePathParams pathParams;
    public DeletePipelineRequest withPathParams(DeletePipelinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePipelineHeaders headers;
    public DeletePipelineRequest withHeaders(DeletePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
}