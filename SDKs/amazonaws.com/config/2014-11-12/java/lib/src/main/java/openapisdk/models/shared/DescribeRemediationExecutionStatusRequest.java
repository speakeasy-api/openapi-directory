package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRemediationExecutionStatusRequest {
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public DescribeRemediationExecutionStatusRequest withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeRemediationExecutionStatusRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeRemediationExecutionStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceKeys")
    public ResourceKey[] resourceKeys;
    public DescribeRemediationExecutionStatusRequest withResourceKeys(ResourceKey[] resourceKeys) {
        this.resourceKeys = resourceKeys;
        return this;
    }
}