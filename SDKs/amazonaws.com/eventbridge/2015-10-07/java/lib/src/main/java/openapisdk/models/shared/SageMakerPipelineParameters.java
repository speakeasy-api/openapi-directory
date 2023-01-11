package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SageMakerPipelineParameters
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
**/
public class SageMakerPipelineParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PipelineParameterList")
    public SageMakerPipelineParameter[] pipelineParameterList;
    public SageMakerPipelineParameters withPipelineParameterList(SageMakerPipelineParameter[] pipelineParameterList) {
        this.pipelineParameterList = pipelineParameterList;
        return this;
    }
}