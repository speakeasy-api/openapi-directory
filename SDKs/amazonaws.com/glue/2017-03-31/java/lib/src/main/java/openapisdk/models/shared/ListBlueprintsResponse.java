package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBlueprintsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blueprints")
    public String[] blueprints;
    public ListBlueprintsResponse withBlueprints(String[] blueprints) {
        this.blueprints = blueprints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListBlueprintsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}