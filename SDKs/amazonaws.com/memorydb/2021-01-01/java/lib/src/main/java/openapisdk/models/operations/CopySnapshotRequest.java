package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopySnapshotRequest {
    public CopySnapshotHeaders headers;
    public CopySnapshotRequest withHeaders(CopySnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopySnapshotRequest request;
    public CopySnapshotRequest withRequest(openapisdk.models.shared.CopySnapshotRequest request) {
        this.request = request;
        return this;
    }
}