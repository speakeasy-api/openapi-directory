package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RunPipelineActivityRequestBody {
    @JsonProperty("payloads")
    public String[] payloads;
    public RunPipelineActivityRequestBody withPayloads(String[] payloads) {
        this.payloads = payloads;
        return this;
    }
    @JsonProperty("pipelineActivity")
    public RunPipelineActivityRequestBodyPipelineActivity pipelineActivity;
    public RunPipelineActivityRequestBody withPipelineActivity(RunPipelineActivityRequestBodyPipelineActivity pipelineActivity) {
        this.pipelineActivity = pipelineActivity;
        return this;
    }
}