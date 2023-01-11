package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AbsoluteTimeRange
 * A time range, set in seconds, between two points in the call.
**/
public class AbsoluteTimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndTime")
    public Long endTime;
    public AbsoluteTimeRange withEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("First")
    public Long first;
    public AbsoluteTimeRange withFirst(Long first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Last")
    public Long last;
    public AbsoluteTimeRange withLast(Long last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTime")
    public Long startTime;
    public AbsoluteTimeRange withStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }
}