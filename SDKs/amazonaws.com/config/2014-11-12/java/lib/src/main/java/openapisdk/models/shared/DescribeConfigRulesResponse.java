package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConfigRulesResponse
 * <p/>
**/
public class DescribeConfigRulesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRules")
    public ConfigRule[] configRules;
    public DescribeConfigRulesResponse withConfigRules(ConfigRule[] configRules) {
        this.configRules = configRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConfigRulesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}