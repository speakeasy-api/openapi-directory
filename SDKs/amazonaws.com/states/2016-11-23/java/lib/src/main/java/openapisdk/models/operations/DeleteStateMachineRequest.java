package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStateMachineRequest {
    public DeleteStateMachineHeaders headers;
    public DeleteStateMachineRequest withHeaders(DeleteStateMachineHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteStateMachineInput request;
    public DeleteStateMachineRequest withRequest(openapisdk.models.shared.DeleteStateMachineInput request) {
        this.request = request;
        return this;
    }
}