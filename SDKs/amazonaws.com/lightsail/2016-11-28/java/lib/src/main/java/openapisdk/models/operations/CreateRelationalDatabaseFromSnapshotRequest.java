package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRelationalDatabaseFromSnapshotRequest {
    public CreateRelationalDatabaseFromSnapshotHeaders headers;
    public CreateRelationalDatabaseFromSnapshotRequest withHeaders(CreateRelationalDatabaseFromSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRelationalDatabaseFromSnapshotRequest request;
    public CreateRelationalDatabaseFromSnapshotRequest withRequest(openapisdk.models.shared.CreateRelationalDatabaseFromSnapshotRequest request) {
        this.request = request;
        return this;
    }
}