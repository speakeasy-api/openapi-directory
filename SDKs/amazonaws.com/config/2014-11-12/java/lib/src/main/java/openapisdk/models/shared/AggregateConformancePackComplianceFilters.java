package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateConformancePackComplianceFilters
 * Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.
**/
public class AggregateConformancePackComplianceFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AggregateConformancePackComplianceFilters withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public AggregateConformancePackComplianceFilters withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ConformancePackComplianceTypeEnum complianceType;
    public AggregateConformancePackComplianceFilters withComplianceType(ConformancePackComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public AggregateConformancePackComplianceFilters withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
}