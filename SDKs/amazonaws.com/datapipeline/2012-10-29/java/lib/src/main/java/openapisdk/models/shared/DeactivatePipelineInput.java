package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeactivatePipelineInput
 * Contains the parameters for DeactivatePipeline.
**/
public class DeactivatePipelineInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelActive")
    public Boolean cancelActive;
    public DeactivatePipelineInput withCancelActive(Boolean cancelActive) {
        this.cancelActive = cancelActive;
        return this;
    }
    @JsonProperty("pipelineId")
    public String pipelineId;
    public DeactivatePipelineInput withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
}