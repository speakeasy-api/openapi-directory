package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlueprintsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blueprints")
    public Blueprint[] blueprints;
    public GetBlueprintsResult withBlueprints(Blueprint[] blueprints) {
        this.blueprints = blueprints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetBlueprintsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}