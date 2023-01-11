package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeMatchmakingConfigurationsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeMatchmakingConfigurationsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configurations")
    public MatchmakingConfiguration[] configurations;
    public DescribeMatchmakingConfigurationsOutput withConfigurations(MatchmakingConfiguration[] configurations) {
        this.configurations = configurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeMatchmakingConfigurationsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}