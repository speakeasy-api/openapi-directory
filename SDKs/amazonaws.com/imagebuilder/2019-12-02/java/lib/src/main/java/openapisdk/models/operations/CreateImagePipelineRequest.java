package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImagePipelineRequest {
    public CreateImagePipelineHeaders headers;
    public CreateImagePipelineRequest withHeaders(CreateImagePipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateImagePipelineRequestBody request;
    public CreateImagePipelineRequest withRequest(CreateImagePipelineRequestBody request) {
        this.request = request;
        return this;
    }
}