package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleABySizePage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public OffsetInfo pagination;
    public ScheduleABySizePage withPagination(OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ScheduleABySize[] results;
    public ScheduleABySizePage withResults(ScheduleABySize[] results) {
        this.results = results;
        return this;
    }
}