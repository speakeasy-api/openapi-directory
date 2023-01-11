package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreFromSnapshotRequest {
    public RestoreFromSnapshotHeaders headers;
    public RestoreFromSnapshotRequest withHeaders(RestoreFromSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreFromSnapshotRequest request;
    public RestoreFromSnapshotRequest withRequest(openapisdk.models.shared.RestoreFromSnapshotRequest request) {
        this.request = request;
        return this;
    }
}