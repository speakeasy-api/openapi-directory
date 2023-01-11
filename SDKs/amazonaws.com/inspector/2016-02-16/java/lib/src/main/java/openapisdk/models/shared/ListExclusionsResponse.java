package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExclusionsResponse {
    @JsonProperty("exclusionArns")
    public String[] exclusionArns;
    public ListExclusionsResponse withExclusionArns(String[] exclusionArns) {
        this.exclusionArns = exclusionArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListExclusionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}