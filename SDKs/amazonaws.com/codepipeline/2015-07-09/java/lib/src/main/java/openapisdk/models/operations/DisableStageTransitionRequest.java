package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableStageTransitionRequest {
    public DisableStageTransitionHeaders headers;
    public DisableStageTransitionRequest withHeaders(DisableStageTransitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableStageTransitionInput request;
    public DisableStageTransitionRequest withRequest(openapisdk.models.shared.DisableStageTransitionInput request) {
        this.request = request;
        return this;
    }
}