package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartSegmentDetectionFilters
 * Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. 
**/
public class StartSegmentDetectionFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShotFilter")
    public StartShotDetectionFilter shotFilter;
    public StartSegmentDetectionFilters withShotFilter(StartShotDetectionFilter shotFilter) {
        this.shotFilter = shotFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TechnicalCueFilter")
    public StartTechnicalCueDetectionFilter technicalCueFilter;
    public StartSegmentDetectionFilters withTechnicalCueFilter(StartTechnicalCueDetectionFilter technicalCueFilter) {
        this.technicalCueFilter = technicalCueFilter;
        return this;
    }
}