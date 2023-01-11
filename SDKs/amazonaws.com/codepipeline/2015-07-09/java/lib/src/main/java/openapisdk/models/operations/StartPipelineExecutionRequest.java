package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPipelineExecutionRequest {
    public StartPipelineExecutionHeaders headers;
    public StartPipelineExecutionRequest withHeaders(StartPipelineExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartPipelineExecutionInput request;
    public StartPipelineExecutionRequest withRequest(openapisdk.models.shared.StartPipelineExecutionInput request) {
        this.request = request;
        return this;
    }
}