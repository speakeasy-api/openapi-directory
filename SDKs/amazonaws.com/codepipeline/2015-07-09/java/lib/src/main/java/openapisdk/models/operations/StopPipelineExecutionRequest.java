package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopPipelineExecutionRequest {
    public StopPipelineExecutionHeaders headers;
    public StopPipelineExecutionRequest withHeaders(StopPipelineExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopPipelineExecutionInput request;
    public StopPipelineExecutionRequest withRequest(openapisdk.models.shared.StopPipelineExecutionInput request) {
        this.request = request;
        return this;
    }
}