package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetLoadBasedAutoScalingRequest {
    public SetLoadBasedAutoScalingHeaders headers;
    public SetLoadBasedAutoScalingRequest withHeaders(SetLoadBasedAutoScalingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetLoadBasedAutoScalingRequest request;
    public SetLoadBasedAutoScalingRequest withRequest(openapisdk.models.shared.SetLoadBasedAutoScalingRequest request) {
        this.request = request;
        return this;
    }
}