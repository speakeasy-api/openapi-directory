package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateImagePipelineRequest {
    public UpdateImagePipelineHeaders headers;
    public UpdateImagePipelineRequest withHeaders(UpdateImagePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateImagePipelineRequestBody request;
    public UpdateImagePipelineRequest withRequest(UpdateImagePipelineRequestBody request) {
        this.request = request;
        return this;
    }
}