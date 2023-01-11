package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProtectionRequest {
    public CreateProtectionHeaders headers;
    public CreateProtectionRequest withHeaders(CreateProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProtectionRequest request;
    public CreateProtectionRequest withRequest(openapisdk.models.shared.CreateProtectionRequest request) {
        this.request = request;
        return this;
    }
}