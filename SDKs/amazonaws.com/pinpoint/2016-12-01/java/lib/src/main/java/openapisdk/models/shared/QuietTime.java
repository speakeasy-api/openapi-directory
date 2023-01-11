package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuietTime
 * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
**/
public class QuietTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("End")
    public String end;
    public QuietTime withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Start")
    public String start;
    public QuietTime withStart(String start) {
        this.start = start;
        return this;
    }
}