package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShotSegment
 * Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>.
**/
public class ShotSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public ShotSegment withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Index")
    public Long index;
    public ShotSegment withIndex(Long index) {
        this.index = index;
        return this;
    }
}