package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplayDestination
 * A <code>ReplayDestination</code> object that contains details about a replay.
**/
public class ReplayDestination {
    @JsonProperty("Arn")
    public String arn;
    public ReplayDestination withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterArns")
    public String[] filterArns;
    public ReplayDestination withFilterArns(String[] filterArns) {
        this.filterArns = filterArns;
        return this;
    }
}