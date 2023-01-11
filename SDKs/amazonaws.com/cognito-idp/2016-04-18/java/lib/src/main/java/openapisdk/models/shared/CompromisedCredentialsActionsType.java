package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CompromisedCredentialsActionsType
 * The compromised credentials actions type
**/
public class CompromisedCredentialsActionsType {
    @JsonProperty("EventAction")
    public CompromisedCredentialsEventActionTypeEnum eventAction;
    public CompromisedCredentialsActionsType withEventAction(CompromisedCredentialsEventActionTypeEnum eventAction) {
        this.eventAction = eventAction;
        return this;
    }
}