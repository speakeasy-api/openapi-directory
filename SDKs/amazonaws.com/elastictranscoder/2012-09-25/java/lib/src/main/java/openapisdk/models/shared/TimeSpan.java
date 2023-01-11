package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSpan
 * Settings that determine when a clip begins and how long it lasts.
**/
public class TimeSpan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Duration")
    public String duration;
    public TimeSpan withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTime")
    public String startTime;
    public TimeSpan withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}