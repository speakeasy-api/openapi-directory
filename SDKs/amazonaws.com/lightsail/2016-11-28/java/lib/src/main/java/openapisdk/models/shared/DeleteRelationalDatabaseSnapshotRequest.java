package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRelationalDatabaseSnapshotRequest {
    @JsonProperty("relationalDatabaseSnapshotName")
    public String relationalDatabaseSnapshotName;
    public DeleteRelationalDatabaseSnapshotRequest withRelationalDatabaseSnapshotName(String relationalDatabaseSnapshotName) {
        this.relationalDatabaseSnapshotName = relationalDatabaseSnapshotName;
        return this;
    }
}