package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Compliance
 * Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.
**/
public class Compliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceContributorCount")
    public ComplianceContributorCount complianceContributorCount;
    public Compliance withComplianceContributorCount(ComplianceContributorCount complianceContributorCount) {
        this.complianceContributorCount = complianceContributorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ComplianceTypeEnum complianceType;
    public Compliance withComplianceType(ComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
}