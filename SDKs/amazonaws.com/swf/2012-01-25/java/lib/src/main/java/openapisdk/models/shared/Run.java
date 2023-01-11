package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Run
 * Specifies the <code>runId</code> of a workflow execution.
**/
public class Run {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public Run withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}