package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBackupRequest {
    public CreateBackupHeaders headers;
    public CreateBackupRequest withHeaders(CreateBackupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBackupRequest request;
    public CreateBackupRequest withRequest(openapisdk.models.shared.CreateBackupRequest request) {
        this.request = request;
        return this;
    }
}