package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigRuleEvaluationStatusRequest
 * <p/>
**/
public class DescribeConfigRuleEvaluationStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleNames")
    public String[] configRuleNames;
    public DescribeConfigRuleEvaluationStatusRequest withConfigRuleNames(String[] configRuleNames) {
        this.configRuleNames = configRuleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeConfigRuleEvaluationStatusRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConfigRuleEvaluationStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}