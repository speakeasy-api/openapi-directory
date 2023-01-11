package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseSnapshotRequest {
    public GetRelationalDatabaseSnapshotHeaders headers;
    public GetRelationalDatabaseSnapshotRequest withHeaders(GetRelationalDatabaseSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseSnapshotRequest request;
    public GetRelationalDatabaseSnapshotRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseSnapshotRequest request) {
        this.request = request;
        return this;
    }
}