package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedAgentStateChange
 * An object representing a change in state for a managed agent.
**/
public class ManagedAgentStateChange {
    @JsonProperty("containerName")
    public String containerName;
    public ManagedAgentStateChange withContainerName(String containerName) {
        this.containerName = containerName;
        return this;
    }
    @JsonProperty("managedAgentName")
    public ManagedAgentNameEnum managedAgentName;
    public ManagedAgentStateChange withManagedAgentName(ManagedAgentNameEnum managedAgentName) {
        this.managedAgentName = managedAgentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ManagedAgentStateChange withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public ManagedAgentStateChange withStatus(String status) {
        this.status = status;
        return this;
    }
}