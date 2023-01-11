package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Timing
 * Details about the timing of a job.
**/
public class Timing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinishTimeMillis")
    public Long finishTimeMillis;
    public Timing withFinishTimeMillis(Long finishTimeMillis) {
        this.finishTimeMillis = finishTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTimeMillis")
    public Long startTimeMillis;
    public Timing withStartTimeMillis(Long startTimeMillis) {
        this.startTimeMillis = startTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubmitTimeMillis")
    public Long submitTimeMillis;
    public Timing withSubmitTimeMillis(Long submitTimeMillis) {
        this.submitTimeMillis = submitTimeMillis;
        return this;
    }
}