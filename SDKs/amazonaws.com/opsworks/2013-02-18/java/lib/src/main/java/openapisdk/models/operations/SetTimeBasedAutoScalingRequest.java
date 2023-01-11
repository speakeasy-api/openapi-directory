package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTimeBasedAutoScalingRequest {
    public SetTimeBasedAutoScalingHeaders headers;
    public SetTimeBasedAutoScalingRequest withHeaders(SetTimeBasedAutoScalingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetTimeBasedAutoScalingRequest request;
    public SetTimeBasedAutoScalingRequest withRequest(openapisdk.models.shared.SetTimeBasedAutoScalingRequest request) {
        this.request = request;
        return this;
    }
}