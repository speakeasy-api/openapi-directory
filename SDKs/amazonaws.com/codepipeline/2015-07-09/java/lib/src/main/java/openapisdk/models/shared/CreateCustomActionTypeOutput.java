package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCustomActionTypeOutput
 * Represents the output of a <code>CreateCustomActionType</code> operation.
**/
public class CreateCustomActionTypeOutput {
    @JsonProperty("actionType")
    public ActionType actionType;
    public CreateCustomActionTypeOutput withActionType(ActionType actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateCustomActionTypeOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}