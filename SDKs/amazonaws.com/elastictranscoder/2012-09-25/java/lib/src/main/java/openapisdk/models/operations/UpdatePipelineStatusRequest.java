package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineStatusRequest {
    public UpdatePipelineStatusPathParams pathParams;
    public UpdatePipelineStatusRequest withPathParams(UpdatePipelineStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePipelineStatusHeaders headers;
    public UpdatePipelineStatusRequest withHeaders(UpdatePipelineStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePipelineStatusRequestBody request;
    public UpdatePipelineStatusRequest withRequest(UpdatePipelineStatusRequestBody request) {
        this.request = request;
        return this;
    }
}