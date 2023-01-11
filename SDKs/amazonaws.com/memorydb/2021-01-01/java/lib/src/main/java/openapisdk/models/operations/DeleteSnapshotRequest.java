package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSnapshotRequest {
    public DeleteSnapshotHeaders headers;
    public DeleteSnapshotRequest withHeaders(DeleteSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSnapshotRequest request;
    public DeleteSnapshotRequest withRequest(openapisdk.models.shared.DeleteSnapshotRequest request) {
        this.request = request;
        return this;
    }
}