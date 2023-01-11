package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDistributionConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionConfigurationSummaryList")
    public DistributionConfigurationSummary[] distributionConfigurationSummaryList;
    public ListDistributionConfigurationsResponse withDistributionConfigurationSummaryList(DistributionConfigurationSummary[] distributionConfigurationSummaryList) {
        this.distributionConfigurationSummaryList = distributionConfigurationSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDistributionConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListDistributionConfigurationsResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}