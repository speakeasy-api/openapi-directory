package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProfilingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentOrchestrationConfig")
    public CreateProfilingGroupRequestBodyAgentOrchestrationConfig agentOrchestrationConfig;
    public CreateProfilingGroupRequestBody withAgentOrchestrationConfig(CreateProfilingGroupRequestBodyAgentOrchestrationConfig agentOrchestrationConfig) {
        this.agentOrchestrationConfig = agentOrchestrationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computePlatform")
    public CreateProfilingGroupRequestBodyComputePlatformEnum computePlatform;
    public CreateProfilingGroupRequestBody withComputePlatform(CreateProfilingGroupRequestBodyComputePlatformEnum computePlatform) {
        this.computePlatform = computePlatform;
        return this;
    }
    @JsonProperty("profilingGroupName")
    public String profilingGroupName;
    public CreateProfilingGroupRequestBody withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateProfilingGroupRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}