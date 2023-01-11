package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SegmentCondition
 * Specifies a segment to associate with an activity in a journey.
**/
public class SegmentCondition {
    @JsonProperty("SegmentId")
    public String segmentId;
    public SegmentCondition withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
}