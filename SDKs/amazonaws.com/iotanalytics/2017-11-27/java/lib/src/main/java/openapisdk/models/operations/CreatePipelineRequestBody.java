package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePipelineRequestBody {
    @JsonProperty("pipelineActivities")
    public openapisdk.models.shared.PipelineActivity[] pipelineActivities;
    public CreatePipelineRequestBody withPipelineActivities(openapisdk.models.shared.PipelineActivity[] pipelineActivities) {
        this.pipelineActivities = pipelineActivities;
        return this;
    }
    @JsonProperty("pipelineName")
    public String pipelineName;
    public CreatePipelineRequestBody withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreatePipelineRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}