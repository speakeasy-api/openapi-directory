package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScalingPlanResourcesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeScalingPlanResourcesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeScalingPlanResourcesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ScalingPlanName")
    public String scalingPlanName;
    public DescribeScalingPlanResourcesRequest withScalingPlanName(String scalingPlanName) {
        this.scalingPlanName = scalingPlanName;
        return this;
    }
    @JsonProperty("ScalingPlanVersion")
    public Long scalingPlanVersion;
    public DescribeScalingPlanResourcesRequest withScalingPlanVersion(Long scalingPlanVersion) {
        this.scalingPlanVersion = scalingPlanVersion;
        return this;
    }
}