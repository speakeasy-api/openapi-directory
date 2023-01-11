package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAgentRequest {
    public CreateAgentHeaders headers;
    public CreateAgentRequest withHeaders(CreateAgentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAgentRequest request;
    public CreateAgentRequest withRequest(openapisdk.models.shared.CreateAgentRequest request) {
        this.request = request;
        return this;
    }
}