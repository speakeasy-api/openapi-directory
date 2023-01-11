package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRelationalDatabaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalRelationalDatabaseSnapshotName")
    public String finalRelationalDatabaseSnapshotName;
    public DeleteRelationalDatabaseRequest withFinalRelationalDatabaseSnapshotName(String finalRelationalDatabaseSnapshotName) {
        this.finalRelationalDatabaseSnapshotName = finalRelationalDatabaseSnapshotName;
        return this;
    }
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public DeleteRelationalDatabaseRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipFinalSnapshot")
    public Boolean skipFinalSnapshot;
    public DeleteRelationalDatabaseRequest withSkipFinalSnapshot(Boolean skipFinalSnapshot) {
        this.skipFinalSnapshot = skipFinalSnapshot;
        return this;
    }
}