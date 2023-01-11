package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConfigurationAggregatorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationAggregators")
    public ConfigurationAggregator[] configurationAggregators;
    public DescribeConfigurationAggregatorsResponse withConfigurationAggregators(ConfigurationAggregator[] configurationAggregators) {
        this.configurationAggregators = configurationAggregators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConfigurationAggregatorsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}