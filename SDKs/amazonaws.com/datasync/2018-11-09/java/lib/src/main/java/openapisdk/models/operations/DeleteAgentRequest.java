package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAgentRequest {
    public DeleteAgentHeaders headers;
    public DeleteAgentRequest withHeaders(DeleteAgentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAgentRequest request;
    public DeleteAgentRequest withRequest(openapisdk.models.shared.DeleteAgentRequest request) {
        this.request = request;
        return this;
    }
}