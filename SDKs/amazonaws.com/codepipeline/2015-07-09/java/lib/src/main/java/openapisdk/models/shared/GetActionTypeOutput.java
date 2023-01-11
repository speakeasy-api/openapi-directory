package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetActionTypeOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public ActionTypeDeclaration actionType;
    public GetActionTypeOutput withActionType(ActionTypeDeclaration actionType) {
        this.actionType = actionType;
        return this;
    }
}