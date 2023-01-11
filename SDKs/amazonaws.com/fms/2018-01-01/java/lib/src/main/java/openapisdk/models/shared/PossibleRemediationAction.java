package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PossibleRemediationAction
 * A list of remediation actions.
**/
public class PossibleRemediationAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PossibleRemediationAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsDefaultAction")
    public Boolean isDefaultAction;
    public PossibleRemediationAction withIsDefaultAction(Boolean isDefaultAction) {
        this.isDefaultAction = isDefaultAction;
        return this;
    }
    @JsonProperty("OrderedRemediationActions")
    public RemediationActionWithOrder[] orderedRemediationActions;
    public PossibleRemediationAction withOrderedRemediationActions(RemediationActionWithOrder[] orderedRemediationActions) {
        this.orderedRemediationActions = orderedRemediationActions;
        return this;
    }
}