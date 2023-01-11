package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseSnapshotResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseSnapshot")
    public RelationalDatabaseSnapshot relationalDatabaseSnapshot;
    public GetRelationalDatabaseSnapshotResult withRelationalDatabaseSnapshot(RelationalDatabaseSnapshot relationalDatabaseSnapshot) {
        this.relationalDatabaseSnapshot = relationalDatabaseSnapshot;
        return this;
    }
}