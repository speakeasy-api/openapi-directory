package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListActiveViolationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeViolations")
    public ActiveViolation[] activeViolations;
    public ListActiveViolationsResponse withActiveViolations(ActiveViolation[] activeViolations) {
        this.activeViolations = activeViolations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListActiveViolationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}