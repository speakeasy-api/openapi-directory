package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateComplianceCount
 * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
**/
public class AggregateComplianceCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceSummary")
    public ComplianceSummary complianceSummary;
    public AggregateComplianceCount withComplianceSummary(ComplianceSummary complianceSummary) {
        this.complianceSummary = complianceSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public AggregateComplianceCount withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}