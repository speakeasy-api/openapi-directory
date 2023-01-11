package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetClipRequestBodyClipFragmentSelector
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
**/
public class GetClipRequestBodyClipFragmentSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentSelectorType")
    public openapisdk.models.shared.ClipFragmentSelectorTypeEnum fragmentSelectorType;
    public GetClipRequestBodyClipFragmentSelector withFragmentSelectorType(openapisdk.models.shared.ClipFragmentSelectorTypeEnum fragmentSelectorType) {
        this.fragmentSelectorType = fragmentSelectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampRange")
    public openapisdk.models.shared.ClipTimestampRange timestampRange;
    public GetClipRequestBodyClipFragmentSelector withTimestampRange(openapisdk.models.shared.ClipTimestampRange timestampRange) {
        this.timestampRange = timestampRange;
        return this;
    }
}