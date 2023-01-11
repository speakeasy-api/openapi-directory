package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TechnicalCueSegment
 * Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
**/
public class TechnicalCueSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public TechnicalCueSegment withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public TechnicalCueTypeEnum type;
    public TechnicalCueSegment withType(TechnicalCueTypeEnum type) {
        this.type = type;
        return this;
    }
}