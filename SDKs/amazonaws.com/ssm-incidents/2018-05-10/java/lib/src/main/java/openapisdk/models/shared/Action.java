package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * The action that starts at the beginning of an incident. The response plan defines the action.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssmAutomation")
    public SsmAutomation ssmAutomation;
    public Action withSsmAutomation(SsmAutomation ssmAutomation) {
        this.ssmAutomation = ssmAutomation;
        return this;
    }
}