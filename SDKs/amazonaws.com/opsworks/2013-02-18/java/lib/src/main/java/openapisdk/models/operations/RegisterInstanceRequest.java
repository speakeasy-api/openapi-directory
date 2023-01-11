package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterInstanceRequest {
    public RegisterInstanceHeaders headers;
    public RegisterInstanceRequest withHeaders(RegisterInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterInstanceRequest request;
    public RegisterInstanceRequest withRequest(openapisdk.models.shared.RegisterInstanceRequest request) {
        this.request = request;
        return this;
    }
}