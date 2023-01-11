package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleRunResult
 * Represents the result of a schedule run request.
**/
public class ScheduleRunResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public Run run;
    public ScheduleRunResult withRun(Run run) {
        this.run = run;
        return this;
    }
}