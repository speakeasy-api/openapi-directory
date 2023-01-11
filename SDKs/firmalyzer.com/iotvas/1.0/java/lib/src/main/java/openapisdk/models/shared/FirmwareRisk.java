package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FirmwareRisk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("risk_summary")
    public FirmwareRiskRiskSummary riskSummary;
    public FirmwareRisk withRiskSummary(FirmwareRiskRiskSummary riskSummary) {
        this.riskSummary = riskSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerable_components")
    public VulnerableComponent[] vulnerableComponents;
    public FirmwareRisk withVulnerableComponents(VulnerableComponent[] vulnerableComponents) {
        this.vulnerableComponents = vulnerableComponents;
        return this;
    }
}