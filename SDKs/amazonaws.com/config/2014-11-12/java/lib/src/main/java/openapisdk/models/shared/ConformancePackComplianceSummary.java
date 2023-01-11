package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConformancePackComplianceSummary
 * Summary includes the name and status of the conformance pack.
**/
public class ConformancePackComplianceSummary {
    @JsonProperty("ConformancePackComplianceStatus")
    public ConformancePackComplianceTypeEnum conformancePackComplianceStatus;
    public ConformancePackComplianceSummary withConformancePackComplianceStatus(ConformancePackComplianceTypeEnum conformancePackComplianceStatus) {
        this.conformancePackComplianceStatus = conformancePackComplianceStatus;
        return this;
    }
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public ConformancePackComplianceSummary withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
}