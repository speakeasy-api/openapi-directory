package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBudgetActionsForBudgetResponse {
    @JsonProperty("Actions")
    public Action[] actions;
    public DescribeBudgetActionsForBudgetResponse withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBudgetActionsForBudgetResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}