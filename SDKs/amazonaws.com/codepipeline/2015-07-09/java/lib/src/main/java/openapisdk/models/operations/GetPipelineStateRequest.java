package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineStateRequest {
    public GetPipelineStateHeaders headers;
    public GetPipelineStateRequest withHeaders(GetPipelineStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPipelineStateInput request;
    public GetPipelineStateRequest withRequest(openapisdk.models.shared.GetPipelineStateInput request) {
        this.request = request;
        return this;
    }
}