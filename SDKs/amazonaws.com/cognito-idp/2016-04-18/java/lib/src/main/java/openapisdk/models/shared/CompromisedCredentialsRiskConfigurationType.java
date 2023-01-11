package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompromisedCredentialsRiskConfigurationType
 * The compromised credentials risk configuration type.
**/
public class CompromisedCredentialsRiskConfigurationType {
    @JsonProperty("Actions")
    public CompromisedCredentialsActionsType actions;
    public CompromisedCredentialsRiskConfigurationType withActions(CompromisedCredentialsActionsType actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventFilter")
    public EventFilterTypeEnum[] eventFilter;
    public CompromisedCredentialsRiskConfigurationType withEventFilter(EventFilterTypeEnum[] eventFilter) {
        this.eventFilter = eventFilter;
        return this;
    }
}