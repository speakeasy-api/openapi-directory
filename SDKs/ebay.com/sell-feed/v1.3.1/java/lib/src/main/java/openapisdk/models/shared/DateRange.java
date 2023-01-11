package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateRange
 * The type that defines the fields for a date range.
**/
public class DateRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public DateRange withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public DateRange withTo(String to) {
        this.to = to;
        return this;
    }
}