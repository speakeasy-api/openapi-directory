package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePipelineRequestBody {
    @JsonProperty("pipelineActivities")
    public openapisdk.models.shared.PipelineActivity[] pipelineActivities;
    public UpdatePipelineRequestBody withPipelineActivities(openapisdk.models.shared.PipelineActivity[] pipelineActivities) {
        this.pipelineActivities = pipelineActivities;
        return this;
    }
}