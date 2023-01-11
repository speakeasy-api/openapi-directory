package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProtectionRequest {
    public DeleteProtectionHeaders headers;
    public DeleteProtectionRequest withHeaders(DeleteProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProtectionRequest request;
    public DeleteProtectionRequest withRequest(openapisdk.models.shared.DeleteProtectionRequest request) {
        this.request = request;
        return this;
    }
}