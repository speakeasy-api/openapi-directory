package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClaimGameServerRequest {
    public ClaimGameServerHeaders headers;
    public ClaimGameServerRequest withHeaders(ClaimGameServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClaimGameServerInput request;
    public ClaimGameServerRequest withRequest(openapisdk.models.shared.ClaimGameServerInput request) {
        this.request = request;
        return this;
    }
}