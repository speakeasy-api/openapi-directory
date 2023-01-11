package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterGameServerRequest {
    public RegisterGameServerHeaders headers;
    public RegisterGameServerRequest withHeaders(RegisterGameServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterGameServerInput request;
    public RegisterGameServerRequest withRequest(openapisdk.models.shared.RegisterGameServerInput request) {
        this.request = request;
        return this;
    }
}