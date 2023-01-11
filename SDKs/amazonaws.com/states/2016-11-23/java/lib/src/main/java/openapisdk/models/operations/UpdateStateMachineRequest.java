package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStateMachineRequest {
    public UpdateStateMachineHeaders headers;
    public UpdateStateMachineRequest withHeaders(UpdateStateMachineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateStateMachineInput request;
    public UpdateStateMachineRequest withRequest(openapisdk.models.shared.UpdateStateMachineInput request) {
        this.request = request;
        return this;
    }
}