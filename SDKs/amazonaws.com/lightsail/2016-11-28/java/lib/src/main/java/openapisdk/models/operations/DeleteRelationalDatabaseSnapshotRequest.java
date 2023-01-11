package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRelationalDatabaseSnapshotRequest {
    public DeleteRelationalDatabaseSnapshotHeaders headers;
    public DeleteRelationalDatabaseSnapshotRequest withHeaders(DeleteRelationalDatabaseSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRelationalDatabaseSnapshotRequest request;
    public DeleteRelationalDatabaseSnapshotRequest withRequest(openapisdk.models.shared.DeleteRelationalDatabaseSnapshotRequest request) {
        this.request = request;
        return this;
    }
}