package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListActionExecutionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionExecutionDetails")
    public ActionExecutionDetail[] actionExecutionDetails;
    public ListActionExecutionsOutput withActionExecutionDetails(ActionExecutionDetail[] actionExecutionDetails) {
        this.actionExecutionDetails = actionExecutionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListActionExecutionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}