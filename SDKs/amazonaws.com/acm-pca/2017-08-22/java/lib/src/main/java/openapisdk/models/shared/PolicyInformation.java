package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyInformation
 * Defines the X.509 <code>CertificatePolicies</code> extension.
**/
public class PolicyInformation {
    @JsonProperty("CertPolicyId")
    public String certPolicyId;
    public PolicyInformation withCertPolicyId(String certPolicyId) {
        this.certPolicyId = certPolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyQualifiers")
    public PolicyQualifierInfo[] policyQualifiers;
    public PolicyInformation withPolicyQualifiers(PolicyQualifierInfo[] policyQualifiers) {
        this.policyQualifiers = policyQualifiers;
        return this;
    }
}