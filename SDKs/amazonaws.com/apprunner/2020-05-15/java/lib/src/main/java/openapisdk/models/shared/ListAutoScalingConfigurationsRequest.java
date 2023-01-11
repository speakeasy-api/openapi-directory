package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAutoScalingConfigurationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingConfigurationName")
    public String autoScalingConfigurationName;
    public ListAutoScalingConfigurationsRequest withAutoScalingConfigurationName(String autoScalingConfigurationName) {
        this.autoScalingConfigurationName = autoScalingConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestOnly")
    public Boolean latestOnly;
    public ListAutoScalingConfigurationsRequest withLatestOnly(Boolean latestOnly) {
        this.latestOnly = latestOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAutoScalingConfigurationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAutoScalingConfigurationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}