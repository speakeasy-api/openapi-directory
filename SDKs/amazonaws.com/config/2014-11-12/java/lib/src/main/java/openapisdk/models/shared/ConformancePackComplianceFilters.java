package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConformancePackComplianceFilters
 * Filters the conformance pack by compliance types and Config rule names.
**/
public class ConformancePackComplianceFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ConformancePackComplianceTypeEnum complianceType;
    public ConformancePackComplianceFilters withComplianceType(ConformancePackComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleNames")
    public String[] configRuleNames;
    public ConformancePackComplianceFilters withConfigRuleNames(String[] configRuleNames) {
        this.configRuleNames = configRuleNames;
        return this;
    }
}