package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAutoScalingConfigurationsResponse {
    @JsonProperty("AutoScalingConfigurationSummaryList")
    public AutoScalingConfigurationSummary[] autoScalingConfigurationSummaryList;
    public ListAutoScalingConfigurationsResponse withAutoScalingConfigurationSummaryList(AutoScalingConfigurationSummary[] autoScalingConfigurationSummaryList) {
        this.autoScalingConfigurationSummaryList = autoScalingConfigurationSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAutoScalingConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}