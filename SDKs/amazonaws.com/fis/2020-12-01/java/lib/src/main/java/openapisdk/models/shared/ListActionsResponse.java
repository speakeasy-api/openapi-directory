package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListActionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public ActionSummary[] actions;
    public ListActionsResponse withActions(ActionSummary[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListActionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}