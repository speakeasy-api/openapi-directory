package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPullRequestsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPullRequestsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("pullRequestIds")
    public String[] pullRequestIds;
    public ListPullRequestsOutput withPullRequestIds(String[] pullRequestIds) {
        this.pullRequestIds = pullRequestIds;
        return this;
    }
}