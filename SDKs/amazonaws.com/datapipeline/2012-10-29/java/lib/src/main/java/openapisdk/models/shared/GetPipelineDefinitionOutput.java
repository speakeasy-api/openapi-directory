package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPipelineDefinitionOutput
 * Contains the output of GetPipelineDefinition.
**/
public class GetPipelineDefinitionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterObjects")
    public ParameterObject[] parameterObjects;
    public GetPipelineDefinitionOutput withParameterObjects(ParameterObject[] parameterObjects) {
        this.parameterObjects = parameterObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterValues")
    public ParameterValue[] parameterValues;
    public GetPipelineDefinitionOutput withParameterValues(ParameterValue[] parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineObjects")
    public PipelineObject[] pipelineObjects;
    public GetPipelineDefinitionOutput withPipelineObjects(PipelineObject[] pipelineObjects) {
        this.pipelineObjects = pipelineObjects;
        return this;
    }
}