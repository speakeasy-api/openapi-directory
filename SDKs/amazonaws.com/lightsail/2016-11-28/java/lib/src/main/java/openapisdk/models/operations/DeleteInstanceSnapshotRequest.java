package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInstanceSnapshotRequest {
    public DeleteInstanceSnapshotHeaders headers;
    public DeleteInstanceSnapshotRequest withHeaders(DeleteInstanceSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInstanceSnapshotRequest request;
    public DeleteInstanceSnapshotRequest withRequest(openapisdk.models.shared.DeleteInstanceSnapshotRequest request) {
        this.request = request;
        return this;
    }
}