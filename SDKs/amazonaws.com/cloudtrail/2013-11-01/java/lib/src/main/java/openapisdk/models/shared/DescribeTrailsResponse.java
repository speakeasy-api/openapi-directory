package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTrailsResponse
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
public class DescribeTrailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trailList")
    public Trail[] trailList;
    public DescribeTrailsResponse withTrailList(Trail[] trailList) {
        this.trailList = trailList;
        return this;
    }
}