package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeHomeRegionControlsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegionControls")
    public HomeRegionControl[] homeRegionControls;
    public DescribeHomeRegionControlsResult withHomeRegionControls(HomeRegionControl[] homeRegionControls) {
        this.homeRegionControls = homeRegionControls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeHomeRegionControlsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}