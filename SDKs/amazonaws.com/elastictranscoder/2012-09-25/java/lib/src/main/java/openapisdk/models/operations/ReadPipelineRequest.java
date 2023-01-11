package openapisdk.models.operations;



public class ReadPipelineRequest {
    public ReadPipelinePathParams pathParams;
    public ReadPipelineRequest withPathParams(ReadPipelinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReadPipelineHeaders headers;
    public ReadPipelineRequest withHeaders(ReadPipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
}