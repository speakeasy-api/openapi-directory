package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeSigningPolicies
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
public class CodeSigningPolicies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UntrustedArtifactOnDeployment")
    public CodeSigningPolicyEnum untrustedArtifactOnDeployment;
    public CodeSigningPolicies withUntrustedArtifactOnDeployment(CodeSigningPolicyEnum untrustedArtifactOnDeployment) {
        this.untrustedArtifactOnDeployment = untrustedArtifactOnDeployment;
        return this;
    }
}