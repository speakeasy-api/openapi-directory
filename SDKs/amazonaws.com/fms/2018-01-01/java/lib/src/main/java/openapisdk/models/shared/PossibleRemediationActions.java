package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PossibleRemediationActions
 * A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
**/
public class PossibleRemediationActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Actions")
    public PossibleRemediationAction[] actions;
    public PossibleRemediationActions withActions(PossibleRemediationAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PossibleRemediationActions withDescription(String description) {
        this.description = description;
        return this;
    }
}