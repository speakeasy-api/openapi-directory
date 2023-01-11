package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopExecutionTrigger
 * The interaction that stopped a pipeline execution.
**/
public class StopExecutionTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public StopExecutionTrigger withReason(String reason) {
        this.reason = reason;
        return this;
    }
}