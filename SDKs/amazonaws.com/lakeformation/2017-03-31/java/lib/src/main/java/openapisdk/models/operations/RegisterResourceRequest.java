package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterResourceRequest {
    public RegisterResourceHeaders headers;
    public RegisterResourceRequest withHeaders(RegisterResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterResourceRequest request;
    public RegisterResourceRequest withRequest(openapisdk.models.shared.RegisterResourceRequest request) {
        this.request = request;
        return this;
    }
}