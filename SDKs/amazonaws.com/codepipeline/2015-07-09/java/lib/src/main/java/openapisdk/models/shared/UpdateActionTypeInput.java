package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateActionTypeInput {
    @JsonProperty("actionType")
    public ActionTypeDeclaration actionType;
    public UpdateActionTypeInput withActionType(ActionTypeDeclaration actionType) {
        this.actionType = actionType;
        return this;
    }
}