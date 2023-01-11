package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy
 * Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalConstraints")
    public java.util.Map<String, Object> additionalConstraints;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy withAdditionalConstraints(java.util.Map<String, Object> additionalConstraints) {
        this.additionalConstraints = additionalConstraints;
        return this;
    }
    @JsonProperty("MinimumLength")
    public java.util.Map<String, Object> minimumLength;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy withMinimumLength(java.util.Map<String, Object> minimumLength) {
        this.minimumLength = minimumLength;
        return this;
    }
}