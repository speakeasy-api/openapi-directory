package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ValidateSecurityProfileBehaviorsRequestBody {
    @JsonProperty("behaviors")
    public openapisdk.models.shared.Behavior[] behaviors;
    public ValidateSecurityProfileBehaviorsRequestBody withBehaviors(openapisdk.models.shared.Behavior[] behaviors) {
        this.behaviors = behaviors;
        return this;
    }
}