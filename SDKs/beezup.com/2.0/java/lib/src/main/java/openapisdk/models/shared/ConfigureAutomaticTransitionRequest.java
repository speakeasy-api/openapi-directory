package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConfigureAutomaticTransitionRequest {
    @JsonProperty("automaticTransitions")
    public AutomaticTransition[] automaticTransitions;
    public ConfigureAutomaticTransitionRequest withAutomaticTransitions(AutomaticTransition[] automaticTransitions) {
        this.automaticTransitions = automaticTransitions;
        return this;
    }
}