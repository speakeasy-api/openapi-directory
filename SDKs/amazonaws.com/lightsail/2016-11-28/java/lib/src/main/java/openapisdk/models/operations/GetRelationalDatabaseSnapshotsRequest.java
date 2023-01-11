package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseSnapshotsRequest {
    public GetRelationalDatabaseSnapshotsHeaders headers;
    public GetRelationalDatabaseSnapshotsRequest withHeaders(GetRelationalDatabaseSnapshotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseSnapshotsRequest request;
    public GetRelationalDatabaseSnapshotsRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseSnapshotsRequest request) {
        this.request = request;
        return this;
    }
}