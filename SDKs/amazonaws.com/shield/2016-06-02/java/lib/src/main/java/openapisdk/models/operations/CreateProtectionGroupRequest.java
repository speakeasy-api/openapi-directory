package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProtectionGroupRequest {
    public CreateProtectionGroupHeaders headers;
    public CreateProtectionGroupRequest withHeaders(CreateProtectionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProtectionGroupRequest request;
    public CreateProtectionGroupRequest withRequest(openapisdk.models.shared.CreateProtectionGroupRequest request) {
        this.request = request;
        return this;
    }
}