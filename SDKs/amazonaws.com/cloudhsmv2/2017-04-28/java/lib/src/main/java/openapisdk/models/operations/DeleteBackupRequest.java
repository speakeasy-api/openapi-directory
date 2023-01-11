package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBackupRequest {
    public DeleteBackupHeaders headers;
    public DeleteBackupRequest withHeaders(DeleteBackupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBackupRequest request;
    public DeleteBackupRequest withRequest(openapisdk.models.shared.DeleteBackupRequest request) {
        this.request = request;
        return this;
    }
}