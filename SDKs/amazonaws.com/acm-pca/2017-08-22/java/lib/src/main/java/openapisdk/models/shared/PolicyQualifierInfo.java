package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PolicyQualifierInfo
 * Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.
**/
public class PolicyQualifierInfo {
    @JsonProperty("PolicyQualifierId")
    public PolicyQualifierIdEnum policyQualifierId;
    public PolicyQualifierInfo withPolicyQualifierId(PolicyQualifierIdEnum policyQualifierId) {
        this.policyQualifierId = policyQualifierId;
        return this;
    }
    @JsonProperty("Qualifier")
    public Qualifier qualifier;
    public PolicyQualifierInfo withQualifier(Qualifier qualifier) {
        this.qualifier = qualifier;
        return this;
    }
}