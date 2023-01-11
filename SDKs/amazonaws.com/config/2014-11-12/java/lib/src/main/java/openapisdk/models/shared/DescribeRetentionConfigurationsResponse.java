package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRetentionConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeRetentionConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionConfigurations")
    public RetentionConfiguration[] retentionConfigurations;
    public DescribeRetentionConfigurationsResponse withRetentionConfigurations(RetentionConfiguration[] retentionConfigurations) {
        this.retentionConfigurations = retentionConfigurations;
        return this;
    }
}