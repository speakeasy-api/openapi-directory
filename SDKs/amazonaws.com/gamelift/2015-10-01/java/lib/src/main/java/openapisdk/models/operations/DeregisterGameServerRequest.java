package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterGameServerRequest {
    public DeregisterGameServerHeaders headers;
    public DeregisterGameServerRequest withHeaders(DeregisterGameServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterGameServerInput request;
    public DeregisterGameServerRequest withRequest(openapisdk.models.shared.DeregisterGameServerInput request) {
        this.request = request;
        return this;
    }
}