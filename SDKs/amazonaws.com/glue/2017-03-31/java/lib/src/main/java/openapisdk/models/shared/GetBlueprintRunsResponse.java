package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlueprintRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintRuns")
    public BlueprintRun[] blueprintRuns;
    public GetBlueprintRunsResponse withBlueprintRuns(BlueprintRun[] blueprintRuns) {
        this.blueprintRuns = blueprintRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetBlueprintRunsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}