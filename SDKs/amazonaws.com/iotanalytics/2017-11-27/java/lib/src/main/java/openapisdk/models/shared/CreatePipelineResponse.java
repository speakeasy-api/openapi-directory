package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePipelineResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineArn")
    public String pipelineArn;
    public CreatePipelineResponse withPipelineArn(String pipelineArn) {
        this.pipelineArn = pipelineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineName")
    public String pipelineName;
    public CreatePipelineResponse withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}