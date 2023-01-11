package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConformancePackRuleCompliance
 * Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.
**/
public class ConformancePackRuleCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ConformancePackComplianceTypeEnum complianceType;
    public ConformancePackRuleCompliance withComplianceType(ConformancePackComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public ConformancePackRuleCompliance withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Controls")
    public String[] controls;
    public ConformancePackRuleCompliance withControls(String[] controls) {
        this.controls = controls;
        return this;
    }
}