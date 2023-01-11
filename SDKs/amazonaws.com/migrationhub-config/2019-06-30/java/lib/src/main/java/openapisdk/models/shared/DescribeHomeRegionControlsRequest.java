package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeHomeRegionControlsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlId")
    public String controlId;
    public DescribeHomeRegionControlsRequest withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public DescribeHomeRegionControlsRequest withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeHomeRegionControlsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeHomeRegionControlsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public Target target;
    public DescribeHomeRegionControlsRequest withTarget(Target target) {
        this.target = target;
        return this;
    }
}