package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RotationRulesType
 * A structure that defines the rotation configuration for the secret.
**/
public class RotationRulesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutomaticallyAfterDays")
    public Long automaticallyAfterDays;
    public RotationRulesType withAutomaticallyAfterDays(Long automaticallyAfterDays) {
        this.automaticallyAfterDays = automaticallyAfterDays;
        return this;
    }
}