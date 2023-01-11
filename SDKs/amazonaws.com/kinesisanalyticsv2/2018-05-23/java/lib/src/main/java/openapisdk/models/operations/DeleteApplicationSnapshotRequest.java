package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationSnapshotRequest {
    public DeleteApplicationSnapshotHeaders headers;
    public DeleteApplicationSnapshotRequest withHeaders(DeleteApplicationSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationSnapshotRequest request;
    public DeleteApplicationSnapshotRequest withRequest(openapisdk.models.shared.DeleteApplicationSnapshotRequest request) {
        this.request = request;
        return this;
    }
}