package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchSystemInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchSystemInstancesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaries")
    public SystemInstanceSummary[] summaries;
    public SearchSystemInstancesResponse withSummaries(SystemInstanceSummary[] summaries) {
        this.summaries = summaries;
        return this;
    }
}