package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDashStreamingSessionUrlRequestBodyDashFragmentSelector
 * Contains the range of timestamps for the requested media, and the source of the timestamps. 
**/
public class GetDashStreamingSessionUrlRequestBodyDashFragmentSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentSelectorType")
    public openapisdk.models.shared.DashFragmentSelectorTypeEnum fragmentSelectorType;
    public GetDashStreamingSessionUrlRequestBodyDashFragmentSelector withFragmentSelectorType(openapisdk.models.shared.DashFragmentSelectorTypeEnum fragmentSelectorType) {
        this.fragmentSelectorType = fragmentSelectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampRange")
    public openapisdk.models.shared.DashTimestampRange timestampRange;
    public GetDashStreamingSessionUrlRequestBodyDashFragmentSelector withTimestampRange(openapisdk.models.shared.DashTimestampRange timestampRange) {
        this.timestampRange = timestampRange;
        return this;
    }
}