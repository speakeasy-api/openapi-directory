package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseSnapshotsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetRelationalDatabaseSnapshotsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseSnapshots")
    public RelationalDatabaseSnapshot[] relationalDatabaseSnapshots;
    public GetRelationalDatabaseSnapshotsResult withRelationalDatabaseSnapshots(RelationalDatabaseSnapshot[] relationalDatabaseSnapshots) {
        this.relationalDatabaseSnapshots = relationalDatabaseSnapshots;
        return this;
    }
}