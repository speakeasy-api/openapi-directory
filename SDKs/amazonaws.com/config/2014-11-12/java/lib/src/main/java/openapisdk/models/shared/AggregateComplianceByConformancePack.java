package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateComplianceByConformancePack
 * <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>
**/
public class AggregateComplianceByConformancePack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AggregateComplianceByConformancePack withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public AggregateComplianceByConformancePack withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Compliance")
    public AggregateConformancePackCompliance compliance;
    public AggregateComplianceByConformancePack withCompliance(AggregateConformancePackCompliance compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public AggregateComplianceByConformancePack withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
}