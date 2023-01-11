package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateConformancePackComplianceSummary
 * Provides a summary of compliance based on either account ID or region. 
**/
public class AggregateConformancePackComplianceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceSummary")
    public AggregateConformancePackComplianceCount complianceSummary;
    public AggregateConformancePackComplianceSummary withComplianceSummary(AggregateConformancePackComplianceCount complianceSummary) {
        this.complianceSummary = complianceSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public AggregateConformancePackComplianceSummary withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}