package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPipelineRequest {
    public GetPipelineHeaders headers;
    public GetPipelineRequest withHeaders(GetPipelineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPipelineInput request;
    public GetPipelineRequest withRequest(openapisdk.models.shared.GetPipelineInput request) {
        this.request = request;
        return this;
    }
}