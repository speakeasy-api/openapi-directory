package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleBPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public SeekInfo pagination;
    public ScheduleBPage withPagination(SeekInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ScheduleB[] results;
    public ScheduleBPage withResults(ScheduleB[] results) {
        this.results = results;
        return this;
    }
}