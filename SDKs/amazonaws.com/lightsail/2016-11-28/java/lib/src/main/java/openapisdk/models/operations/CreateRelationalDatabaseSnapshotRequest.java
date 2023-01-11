package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRelationalDatabaseSnapshotRequest {
    public CreateRelationalDatabaseSnapshotHeaders headers;
    public CreateRelationalDatabaseSnapshotRequest withHeaders(CreateRelationalDatabaseSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRelationalDatabaseSnapshotRequest request;
    public CreateRelationalDatabaseSnapshotRequest withRequest(openapisdk.models.shared.CreateRelationalDatabaseSnapshotRequest request) {
        this.request = request;
        return this;
    }
}