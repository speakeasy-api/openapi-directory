package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRelationalDatabaseSnapshotRequest {
    @JsonProperty("relationalDatabaseSnapshotName")
    public String relationalDatabaseSnapshotName;
    public GetRelationalDatabaseSnapshotRequest withRelationalDatabaseSnapshotName(String relationalDatabaseSnapshotName) {
        this.relationalDatabaseSnapshotName = relationalDatabaseSnapshotName;
        return this;
    }
}