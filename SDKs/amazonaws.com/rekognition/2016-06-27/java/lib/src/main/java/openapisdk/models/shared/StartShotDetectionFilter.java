package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartShotDetectionFilter
 * Filters for the shot detection segments returned by <code>GetSegmentDetection</code>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
public class StartShotDetectionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinSegmentConfidence")
    public Float minSegmentConfidence;
    public StartShotDetectionFilter withMinSegmentConfidence(Float minSegmentConfidence) {
        this.minSegmentConfidence = minSegmentConfidence;
        return this;
    }
}