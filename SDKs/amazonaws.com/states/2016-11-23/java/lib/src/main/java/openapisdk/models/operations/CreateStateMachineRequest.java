package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStateMachineRequest {
    public CreateStateMachineHeaders headers;
    public CreateStateMachineRequest withHeaders(CreateStateMachineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateStateMachineInput request;
    public CreateStateMachineRequest withRequest(openapisdk.models.shared.CreateStateMachineInput request) {
        this.request = request;
        return this;
    }
}