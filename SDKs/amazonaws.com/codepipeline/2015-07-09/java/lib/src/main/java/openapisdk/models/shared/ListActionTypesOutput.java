package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListActionTypesOutput
 * Represents the output of a <code>ListActionTypes</code> action.
**/
public class ListActionTypesOutput {
    @JsonProperty("actionTypes")
    public ActionType[] actionTypes;
    public ListActionTypesOutput withActionTypes(ActionType[] actionTypes) {
        this.actionTypes = actionTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListActionTypesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}