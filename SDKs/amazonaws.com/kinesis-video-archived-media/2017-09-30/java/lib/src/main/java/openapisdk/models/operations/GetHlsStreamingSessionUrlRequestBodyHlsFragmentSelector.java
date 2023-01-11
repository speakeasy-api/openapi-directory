package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
public class GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentSelectorType")
    public openapisdk.models.shared.HlsFragmentSelectorTypeEnum fragmentSelectorType;
    public GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector withFragmentSelectorType(openapisdk.models.shared.HlsFragmentSelectorTypeEnum fragmentSelectorType) {
        this.fragmentSelectorType = fragmentSelectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampRange")
    public openapisdk.models.shared.HlsTimestampRange timestampRange;
    public GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector withTimestampRange(openapisdk.models.shared.HlsTimestampRange timestampRange) {
        this.timestampRange = timestampRange;
        return this;
    }
}