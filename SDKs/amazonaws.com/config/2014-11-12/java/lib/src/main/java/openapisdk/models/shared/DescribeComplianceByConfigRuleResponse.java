package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeComplianceByConfigRuleResponse
 * <p/>
**/
public class DescribeComplianceByConfigRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceByConfigRules")
    public ComplianceByConfigRule[] complianceByConfigRules;
    public DescribeComplianceByConfigRuleResponse withComplianceByConfigRules(ComplianceByConfigRule[] complianceByConfigRules) {
        this.complianceByConfigRules = complianceByConfigRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeComplianceByConfigRuleResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}