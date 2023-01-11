package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCodeSigningConfigRequestBodyCodeSigningPolicies
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
public class CreateCodeSigningConfigRequestBodyCodeSigningPolicies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UntrustedArtifactOnDeployment")
    public openapisdk.models.shared.CodeSigningPolicyEnum untrustedArtifactOnDeployment;
    public CreateCodeSigningConfigRequestBodyCodeSigningPolicies withUntrustedArtifactOnDeployment(openapisdk.models.shared.CodeSigningPolicyEnum untrustedArtifactOnDeployment) {
        this.untrustedArtifactOnDeployment = untrustedArtifactOnDeployment;
        return this;
    }
}