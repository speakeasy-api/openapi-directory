package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalingPlansRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationSources")
    public ApplicationSource[] applicationSources;
    public DescribeScalingPlansRequest withApplicationSources(ApplicationSource[] applicationSources) {
        this.applicationSources = applicationSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeScalingPlansRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPlansRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPlanNames")
    public String[] scalingPlanNames;
    public DescribeScalingPlansRequest withScalingPlanNames(String[] scalingPlanNames) {
        this.scalingPlanNames = scalingPlanNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPlanVersion")
    public Long scalingPlanVersion;
    public DescribeScalingPlansRequest withScalingPlanVersion(Long scalingPlanVersion) {
        this.scalingPlanVersion = scalingPlanVersion;
        return this;
    }
}