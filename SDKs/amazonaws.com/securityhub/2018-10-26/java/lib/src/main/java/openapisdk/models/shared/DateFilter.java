package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateFilter
 * A date filter for querying findings.
**/
public class DateFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateRange")
    public DateRange dateRange;
    public DateFilter withDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("End")
    public String end;
    public DateFilter withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Start")
    public String start;
    public DateFilter withStart(String start) {
        this.start = start;
        return this;
    }
}