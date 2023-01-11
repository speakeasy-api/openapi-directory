package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionExecutionFilter
 * Filter values for the action execution.
**/
public class ActionExecutionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public ActionExecutionFilter withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
}