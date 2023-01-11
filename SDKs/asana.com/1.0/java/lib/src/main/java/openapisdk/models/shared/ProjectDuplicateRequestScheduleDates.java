package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectDuplicateRequestScheduleDates
 * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
**/
public class ProjectDuplicateRequestScheduleDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public String dueOn;
    public ProjectDuplicateRequestScheduleDates withDueOn(String dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonProperty("should_skip_weekends")
    public Boolean shouldSkipWeekends;
    public ProjectDuplicateRequestScheduleDates withShouldSkipWeekends(Boolean shouldSkipWeekends) {
        this.shouldSkipWeekends = shouldSkipWeekends;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public String startOn;
    public ProjectDuplicateRequestScheduleDates withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
}