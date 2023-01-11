package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateConformancePackCompliance
 * <p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
**/
public class AggregateConformancePackCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ConformancePackComplianceTypeEnum complianceType;
    public AggregateConformancePackCompliance withComplianceType(ConformancePackComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompliantRuleCount")
    public Long compliantRuleCount;
    public AggregateConformancePackCompliance withCompliantRuleCount(Long compliantRuleCount) {
        this.compliantRuleCount = compliantRuleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonCompliantRuleCount")
    public Long nonCompliantRuleCount;
    public AggregateConformancePackCompliance withNonCompliantRuleCount(Long nonCompliantRuleCount) {
        this.nonCompliantRuleCount = nonCompliantRuleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalRuleCount")
    public Long totalRuleCount;
    public AggregateConformancePackCompliance withTotalRuleCount(Long totalRuleCount) {
        this.totalRuleCount = totalRuleCount;
        return this;
    }
}