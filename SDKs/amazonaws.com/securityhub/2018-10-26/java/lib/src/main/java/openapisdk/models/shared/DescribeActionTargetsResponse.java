package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeActionTargetsResponse {
    @JsonProperty("ActionTargets")
    public ActionTarget[] actionTargets;
    public DescribeActionTargetsResponse withActionTargets(ActionTarget[] actionTargets) {
        this.actionTargets = actionTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeActionTargetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}