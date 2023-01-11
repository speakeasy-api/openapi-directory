package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTestGridSessionActionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public TestGridSessionAction[] actions;
    public ListTestGridSessionActionsResult withActions(TestGridSessionAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridSessionActionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}