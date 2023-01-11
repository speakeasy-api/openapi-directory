package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleEPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public SeekInfo pagination;
    public ScheduleEPage withPagination(SeekInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ScheduleE[] results;
    public ScheduleEPage withResults(ScheduleE[] results) {
        this.results = results;
        return this;
    }
}