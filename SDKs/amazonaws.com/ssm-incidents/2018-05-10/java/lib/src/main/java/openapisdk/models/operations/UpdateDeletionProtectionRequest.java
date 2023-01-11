package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeletionProtectionRequest {
    public UpdateDeletionProtectionHeaders headers;
    public UpdateDeletionProtectionRequest withHeaders(UpdateDeletionProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeletionProtectionRequestBody request;
    public UpdateDeletionProtectionRequest withRequest(UpdateDeletionProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}