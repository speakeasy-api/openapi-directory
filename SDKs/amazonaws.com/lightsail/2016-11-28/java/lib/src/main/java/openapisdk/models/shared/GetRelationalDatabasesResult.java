package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabasesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetRelationalDatabasesResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabases")
    public RelationalDatabase[] relationalDatabases;
    public GetRelationalDatabasesResult withRelationalDatabases(RelationalDatabase[] relationalDatabases) {
        this.relationalDatabases = relationalDatabases;
        return this;
    }
}