package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAutoSnapshotRequest {
    public DeleteAutoSnapshotHeaders headers;
    public DeleteAutoSnapshotRequest withHeaders(DeleteAutoSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAutoSnapshotRequest request;
    public DeleteAutoSnapshotRequest withRequest(openapisdk.models.shared.DeleteAutoSnapshotRequest request) {
        this.request = request;
        return this;
    }
}