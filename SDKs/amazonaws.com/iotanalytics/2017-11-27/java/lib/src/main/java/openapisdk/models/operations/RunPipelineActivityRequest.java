package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunPipelineActivityRequest {
    public RunPipelineActivityHeaders headers;
    public RunPipelineActivityRequest withHeaders(RunPipelineActivityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RunPipelineActivityRequestBody request;
    public RunPipelineActivityRequest withRequest(RunPipelineActivityRequestBody request) {
        this.request = request;
        return this;
    }
}