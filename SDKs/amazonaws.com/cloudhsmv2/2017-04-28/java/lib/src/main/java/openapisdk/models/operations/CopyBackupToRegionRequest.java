package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyBackupToRegionRequest {
    public CopyBackupToRegionHeaders headers;
    public CopyBackupToRegionRequest withHeaders(CopyBackupToRegionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyBackupToRegionRequest request;
    public CopyBackupToRegionRequest withRequest(openapisdk.models.shared.CopyBackupToRegionRequest request) {
        this.request = request;
        return this;
    }
}