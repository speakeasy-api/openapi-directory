package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalConstraints")
    public java.util.Map<String, Object> additionalConstraints;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy withAdditionalConstraints(java.util.Map<String, Object> additionalConstraints) {
        this.additionalConstraints = additionalConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumLength")
    public java.util.Map<String, Object> minimumLength;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy withMinimumLength(java.util.Map<String, Object> minimumLength) {
        this.minimumLength = minimumLength;
        return this;
    }
}