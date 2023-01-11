package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePullRequestEventsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribePullRequestEventsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("pullRequestEvents")
    public PullRequestEvent[] pullRequestEvents;
    public DescribePullRequestEventsOutput withPullRequestEvents(PullRequestEvent[] pullRequestEvents) {
        this.pullRequestEvents = pullRequestEvents;
        return this;
    }
}