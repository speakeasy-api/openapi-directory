package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTechnicalCueDetectionFilter
 * Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
public class StartTechnicalCueDetectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlackFrame")
    public BlackFrame blackFrame;
    public StartTechnicalCueDetectionFilter withBlackFrame(BlackFrame blackFrame) {
        this.blackFrame = blackFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinSegmentConfidence")
    public Float minSegmentConfidence;
    public StartTechnicalCueDetectionFilter withMinSegmentConfidence(Float minSegmentConfidence) {
        this.minSegmentConfidence = minSegmentConfidence;
        return this;
    }
}