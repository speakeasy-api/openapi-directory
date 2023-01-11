package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScheduledActionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScheduledActionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduledActions")
    public ScheduledAction[] scheduledActions;
    public DescribeScheduledActionsResponse withScheduledActions(ScheduledAction[] scheduledActions) {
        this.scheduledActions = scheduledActions;
        return this;
    }
}