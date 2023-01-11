package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateProfilingGroupRequestBody {
    @JsonProperty("agentOrchestrationConfig")
    public UpdateProfilingGroupRequestBodyAgentOrchestrationConfig agentOrchestrationConfig;
    public UpdateProfilingGroupRequestBody withAgentOrchestrationConfig(UpdateProfilingGroupRequestBodyAgentOrchestrationConfig agentOrchestrationConfig) {
        this.agentOrchestrationConfig = agentOrchestrationConfig;
        return this;
    }
}