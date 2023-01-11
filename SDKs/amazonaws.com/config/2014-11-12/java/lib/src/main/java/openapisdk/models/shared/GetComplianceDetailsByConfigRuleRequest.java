package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetComplianceDetailsByConfigRuleRequest
 * <p/>
**/
public class GetComplianceDetailsByConfigRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceTypes")
    public ComplianceTypeEnum[] complianceTypes;
    public GetComplianceDetailsByConfigRuleRequest withComplianceTypes(ComplianceTypeEnum[] complianceTypes) {
        this.complianceTypes = complianceTypes;
        return this;
    }
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public GetComplianceDetailsByConfigRuleRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public GetComplianceDetailsByConfigRuleRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetComplianceDetailsByConfigRuleRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}