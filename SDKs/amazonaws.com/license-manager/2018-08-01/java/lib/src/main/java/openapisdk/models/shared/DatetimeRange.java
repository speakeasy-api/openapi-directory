package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatetimeRange
 * Describes a time range, in ISO8601-UTC format.
**/
public class DatetimeRange {
    @JsonProperty("Begin")
    public String begin;
    public DatetimeRange withBegin(String begin) {
        this.begin = begin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("End")
    public String end;
    public DatetimeRange withEnd(String end) {
        this.end = end;
        return this;
    }
}