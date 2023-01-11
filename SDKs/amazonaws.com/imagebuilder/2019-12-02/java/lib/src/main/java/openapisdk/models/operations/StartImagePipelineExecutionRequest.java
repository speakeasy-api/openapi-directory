package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartImagePipelineExecutionRequest {
    public StartImagePipelineExecutionHeaders headers;
    public StartImagePipelineExecutionRequest withHeaders(StartImagePipelineExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartImagePipelineExecutionRequestBody request;
    public StartImagePipelineExecutionRequest withRequest(StartImagePipelineExecutionRequestBody request) {
        this.request = request;
        return this;
    }
}