package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseBlueprintsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blueprints")
    public RelationalDatabaseBlueprint[] blueprints;
    public GetRelationalDatabaseBlueprintsResult withBlueprints(RelationalDatabaseBlueprint[] blueprints) {
        this.blueprints = blueprints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetRelationalDatabaseBlueprintsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}