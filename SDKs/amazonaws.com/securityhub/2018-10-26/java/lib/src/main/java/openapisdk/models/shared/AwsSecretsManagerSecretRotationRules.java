package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSecretsManagerSecretRotationRules
 * Defines the rotation schedule for the secret.
**/
public class AwsSecretsManagerSecretRotationRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutomaticallyAfterDays")
    public Long automaticallyAfterDays;
    public AwsSecretsManagerSecretRotationRules withAutomaticallyAfterDays(Long automaticallyAfterDays) {
        this.automaticallyAfterDays = automaticallyAfterDays;
        return this;
    }
}