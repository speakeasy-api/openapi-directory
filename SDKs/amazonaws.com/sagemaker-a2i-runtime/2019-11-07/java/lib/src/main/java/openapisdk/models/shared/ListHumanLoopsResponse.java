package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHumanLoopsResponse {
    @JsonProperty("HumanLoopSummaries")
    public HumanLoopSummary[] humanLoopSummaries;
    public ListHumanLoopsResponse withHumanLoopSummaries(HumanLoopSummary[] humanLoopSummaries) {
        this.humanLoopSummaries = humanLoopSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListHumanLoopsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}