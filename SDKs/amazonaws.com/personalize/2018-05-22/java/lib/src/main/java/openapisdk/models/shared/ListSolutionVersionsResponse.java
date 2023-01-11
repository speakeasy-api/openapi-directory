package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSolutionVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListSolutionVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersions")
    public SolutionVersionSummary[] solutionVersions;
    public ListSolutionVersionsResponse withSolutionVersions(SolutionVersionSummary[] solutionVersions) {
        this.solutionVersions = solutionVersions;
        return this;
    }
}