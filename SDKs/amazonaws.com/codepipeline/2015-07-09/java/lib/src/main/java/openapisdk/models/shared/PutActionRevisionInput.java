package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutActionRevisionInput
 * Represents the input of a <code>PutActionRevision</code> action.
**/
public class PutActionRevisionInput {
    @JsonProperty("actionName")
    public String actionName;
    public PutActionRevisionInput withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonProperty("actionRevision")
    public ActionRevision actionRevision;
    public PutActionRevisionInput withActionRevision(ActionRevision actionRevision) {
        this.actionRevision = actionRevision;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public PutActionRevisionInput withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonProperty("stageName")
    public String stageName;
    public PutActionRevisionInput withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
}