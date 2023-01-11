package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContainerAgentRequest {
    public UpdateContainerAgentHeaders headers;
    public UpdateContainerAgentRequest withHeaders(UpdateContainerAgentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContainerAgentRequest request;
    public UpdateContainerAgentRequest withRequest(openapisdk.models.shared.UpdateContainerAgentRequest request) {
        this.request = request;
        return this;
    }
}