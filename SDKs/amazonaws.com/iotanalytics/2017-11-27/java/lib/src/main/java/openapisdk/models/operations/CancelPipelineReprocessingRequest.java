package openapisdk.models.operations;



public class CancelPipelineReprocessingRequest {
    public CancelPipelineReprocessingPathParams pathParams;
    public CancelPipelineReprocessingRequest withPathParams(CancelPipelineReprocessingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelPipelineReprocessingHeaders headers;
    public CancelPipelineReprocessingRequest withHeaders(CancelPipelineReprocessingHeaders headers) {
        this.headers = headers;
        return this;
    }
}