package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreBackupRequest {
    public RestoreBackupHeaders headers;
    public RestoreBackupRequest withHeaders(RestoreBackupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreBackupRequest request;
    public RestoreBackupRequest withRequest(openapisdk.models.shared.RestoreBackupRequest request) {
        this.request = request;
        return this;
    }
}