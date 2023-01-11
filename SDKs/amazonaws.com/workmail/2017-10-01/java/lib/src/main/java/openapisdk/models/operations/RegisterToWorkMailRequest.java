package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterToWorkMailRequest {
    public RegisterToWorkMailHeaders headers;
    public RegisterToWorkMailRequest withHeaders(RegisterToWorkMailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterToWorkMailRequest request;
    public RegisterToWorkMailRequest withRequest(openapisdk.models.shared.RegisterToWorkMailRequest request) {
        this.request = request;
        return this;
    }
}