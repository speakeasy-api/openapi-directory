package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPipelineReprocessingRequest {
    public StartPipelineReprocessingPathParams pathParams;
    public StartPipelineReprocessingRequest withPathParams(StartPipelineReprocessingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartPipelineReprocessingHeaders headers;
    public StartPipelineReprocessingRequest withHeaders(StartPipelineReprocessingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartPipelineReprocessingRequestBody request;
    public StartPipelineReprocessingRequest withRequest(StartPipelineReprocessingRequestBody request) {
        this.request = request;
        return this;
    }
}