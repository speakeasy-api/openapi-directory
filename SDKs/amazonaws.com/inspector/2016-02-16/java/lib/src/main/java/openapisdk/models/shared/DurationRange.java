package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DurationRange
 * This data type is used in the <a>AssessmentTemplateFilter</a> data type.
**/
public class DurationRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSeconds")
    public Long maxSeconds;
    public DurationRange withMaxSeconds(Long maxSeconds) {
        this.maxSeconds = maxSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minSeconds")
    public Long minSeconds;
    public DurationRange withMinSeconds(Long minSeconds) {
        this.minSeconds = minSeconds;
        return this;
    }
}