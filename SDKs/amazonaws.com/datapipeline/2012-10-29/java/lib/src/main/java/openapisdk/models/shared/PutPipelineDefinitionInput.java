package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutPipelineDefinitionInput
 * Contains the parameters for PutPipelineDefinition.
**/
public class PutPipelineDefinitionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterObjects")
    public ParameterObject[] parameterObjects;
    public PutPipelineDefinitionInput withParameterObjects(ParameterObject[] parameterObjects) {
        this.parameterObjects = parameterObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterValues")
    public ParameterValue[] parameterValues;
    public PutPipelineDefinitionInput withParameterValues(ParameterValue[] parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    }
    @JsonProperty("pipelineId")
    public String pipelineId;
    public PutPipelineDefinitionInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonProperty("pipelineObjects")
    public PipelineObject[] pipelineObjects;
    public PutPipelineDefinitionInput withPipelineObjects(PipelineObject[] pipelineObjects) {
        this.pipelineObjects = pipelineObjects;
        return this;
    }
}