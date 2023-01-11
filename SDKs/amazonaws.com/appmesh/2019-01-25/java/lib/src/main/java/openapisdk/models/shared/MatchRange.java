package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MatchRange
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
**/
public class MatchRange {
    @JsonProperty("end")
    public Long end;
    public MatchRange withEnd(Long end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public Long start;
    public MatchRange withStart(Long start) {
        this.start = start;
        return this;
    }
}