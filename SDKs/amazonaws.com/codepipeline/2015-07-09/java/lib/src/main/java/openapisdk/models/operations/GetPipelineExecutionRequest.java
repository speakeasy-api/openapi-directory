package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineExecutionRequest {
    public GetPipelineExecutionHeaders headers;
    public GetPipelineExecutionRequest withHeaders(GetPipelineExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPipelineExecutionInput request;
    public GetPipelineExecutionRequest withRequest(openapisdk.models.shared.GetPipelineExecutionInput request) {
        this.request = request;
        return this;
    }
}