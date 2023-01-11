package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProtectionGroupRequest {
    public UpdateProtectionGroupHeaders headers;
    public UpdateProtectionGroupRequest withHeaders(UpdateProtectionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProtectionGroupRequest request;
    public UpdateProtectionGroupRequest withRequest(openapisdk.models.shared.UpdateProtectionGroupRequest request) {
        this.request = request;
        return this;
    }
}