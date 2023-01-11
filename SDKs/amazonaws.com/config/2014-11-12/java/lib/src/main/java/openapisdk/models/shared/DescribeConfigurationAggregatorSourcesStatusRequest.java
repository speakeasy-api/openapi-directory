package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConfigurationAggregatorSourcesStatusRequest {
    @JsonProperty("ConfigurationAggregatorName")
    public String configurationAggregatorName;
    public DescribeConfigurationAggregatorSourcesStatusRequest withConfigurationAggregatorName(String configurationAggregatorName) {
        this.configurationAggregatorName = configurationAggregatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeConfigurationAggregatorSourcesStatusRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConfigurationAggregatorSourcesStatusRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateStatus")
    public AggregatedSourceStatusTypeEnum[] updateStatus;
    public DescribeConfigurationAggregatorSourcesStatusRequest withUpdateStatus(AggregatedSourceStatusTypeEnum[] updateStatus) {
        this.updateStatus = updateStatus;
        return this;
    }
}