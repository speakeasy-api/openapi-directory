package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDiskSnapshotRequest {
    public DeleteDiskSnapshotHeaders headers;
    public DeleteDiskSnapshotRequest withHeaders(DeleteDiskSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDiskSnapshotRequest request;
    public DeleteDiskSnapshotRequest withRequest(openapisdk.models.shared.DeleteDiskSnapshotRequest request) {
        this.request = request;
        return this;
    }
}