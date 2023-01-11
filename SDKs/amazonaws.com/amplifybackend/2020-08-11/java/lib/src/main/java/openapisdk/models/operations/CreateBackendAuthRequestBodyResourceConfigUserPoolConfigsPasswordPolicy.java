package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalConstraints")
    public java.util.Map<String, Object> additionalConstraints;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy withAdditionalConstraints(java.util.Map<String, Object> additionalConstraints) {
        this.additionalConstraints = additionalConstraints;
        return this;
    }
    @JsonProperty("MinimumLength")
    public java.util.Map<String, Object> minimumLength;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy withMinimumLength(java.util.Map<String, Object> minimumLength) {
        this.minimumLength = minimumLength;
        return this;
    }
}