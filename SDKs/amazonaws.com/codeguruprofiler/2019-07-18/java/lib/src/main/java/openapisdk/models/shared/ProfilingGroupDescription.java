package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ProfilingGroupDescription
 *  Contains information about a profiling group. 
**/
public class ProfilingGroupDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentOrchestrationConfig")
    public AgentOrchestrationConfig agentOrchestrationConfig;
    public ProfilingGroupDescription withAgentOrchestrationConfig(AgentOrchestrationConfig agentOrchestrationConfig) {
        this.agentOrchestrationConfig = agentOrchestrationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ProfilingGroupDescription withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computePlatform")
    public ComputePlatformEnum computePlatform;
    public ProfilingGroupDescription withComputePlatform(ComputePlatformEnum computePlatform) {
        this.computePlatform = computePlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ProfilingGroupDescription withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProfilingGroupDescription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilingStatus")
    public ProfilingStatus profilingStatus;
    public ProfilingGroupDescription withProfilingStatus(ProfilingStatus profilingStatus) {
        this.profilingStatus = profilingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ProfilingGroupDescription withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public ProfilingGroupDescription withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}