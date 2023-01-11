package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopRunResult
 * Represents the results of your stop run attempt.
**/
public class StopRunResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public Run run;
    public StopRunResult withRun(Run run) {
        this.run = run;
        return this;
    }
}