package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeletePipelineInput
 * Contains the parameters for DeletePipeline.
**/
public class DeletePipelineInput {
    @JsonProperty("pipelineId")
    public String pipelineId;
    public DeletePipelineInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
}