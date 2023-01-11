package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutActionRevisionOutput
 * Represents the output of a <code>PutActionRevision</code> action.
**/
public class PutActionRevisionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRevision")
    public Boolean newRevision;
    public PutActionRevisionOutput withNewRevision(Boolean newRevision) {
        this.newRevision = newRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public PutActionRevisionOutput withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
}