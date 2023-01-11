package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProtectionGroupRequest {
    public DeleteProtectionGroupHeaders headers;
    public DeleteProtectionGroupRequest withHeaders(DeleteProtectionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProtectionGroupRequest request;
    public DeleteProtectionGroupRequest withRequest(openapisdk.models.shared.DeleteProtectionGroupRequest request) {
        this.request = request;
        return this;
    }
}