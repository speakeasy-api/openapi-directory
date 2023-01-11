package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleAPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public SeekInfo pagination;
    public ScheduleAPage withPagination(SeekInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ScheduleA[] results;
    public ScheduleAPage withResults(ScheduleA[] results) {
        this.results = results;
        return this;
    }
}