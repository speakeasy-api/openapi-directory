package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAgentRequest {
    public UpdateAgentHeaders headers;
    public UpdateAgentRequest withHeaders(UpdateAgentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAgentRequest request;
    public UpdateAgentRequest withRequest(openapisdk.models.shared.UpdateAgentRequest request) {
        this.request = request;
        return this;
    }
}