package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SegmentBehaviors
 * Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
public class SegmentBehaviors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recency")
    public RecencyDimension recency;
    public SegmentBehaviors withRecency(RecencyDimension recency) {
        this.recency = recency;
        return this;
    }
}