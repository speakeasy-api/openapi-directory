package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigRulesRequest
 * <p/>
**/
public class DescribeConfigRulesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleNames")
    public String[] configRuleNames;
    public DescribeConfigRulesRequest withConfigRuleNames(String[] configRuleNames) {
        this.configRuleNames = configRuleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConfigRulesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}