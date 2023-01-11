package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableStageTransitionRequest {
    public EnableStageTransitionHeaders headers;
    public EnableStageTransitionRequest withHeaders(EnableStageTransitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableStageTransitionInput request;
    public EnableStageTransitionRequest withRequest(openapisdk.models.shared.EnableStageTransitionInput request) {
        this.request = request;
        return this;
    }
}