package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTrailsRequest
 * Returns information about the trail.
**/
public class DescribeTrailsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeShadowTrails")
    public Boolean includeShadowTrails;
    public DescribeTrailsRequest withIncludeShadowTrails(Boolean includeShadowTrails) {
        this.includeShadowTrails = includeShadowTrails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trailNameList")
    public String[] trailNameList;
    public DescribeTrailsRequest withTrailNameList(String[] trailNameList) {
        this.trailNameList = trailNameList;
        return this;
    }
}