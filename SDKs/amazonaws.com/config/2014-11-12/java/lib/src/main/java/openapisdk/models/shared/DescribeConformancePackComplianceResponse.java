package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConformancePackComplianceResponse {
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public DescribeConformancePackComplianceResponse withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
    @JsonProperty("ConformancePackRuleComplianceList")
    public ConformancePackRuleCompliance[] conformancePackRuleComplianceList;
    public DescribeConformancePackComplianceResponse withConformancePackRuleComplianceList(ConformancePackRuleCompliance[] conformancePackRuleComplianceList) {
        this.conformancePackRuleComplianceList = conformancePackRuleComplianceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConformancePackComplianceResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}