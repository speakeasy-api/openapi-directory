package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConformancePackEvaluationFilters
 * Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.
**/
public class ConformancePackEvaluationFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ConformancePackComplianceTypeEnum complianceType;
    public ConformancePackEvaluationFilters withComplianceType(ConformancePackComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleNames")
    public String[] configRuleNames;
    public ConformancePackEvaluationFilters withConfigRuleNames(String[] configRuleNames) {
        this.configRuleNames = configRuleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIds")
    public String[] resourceIds;
    public ConformancePackEvaluationFilters withResourceIds(String[] resourceIds) {
        this.resourceIds = resourceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public ConformancePackEvaluationFilters withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}