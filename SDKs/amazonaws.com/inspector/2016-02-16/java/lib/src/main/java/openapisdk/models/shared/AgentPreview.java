package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentPreview
 * Used as a response element in the <a>PreviewAgents</a> action.
**/
public class AgentPreview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentHealth")
    public AgentHealthEnum agentHealth;
    public AgentPreview withAgentHealth(AgentHealthEnum agentHealth) {
        this.agentHealth = agentHealth;
        return this;
    }
    @JsonProperty("agentId")
    public String agentId;
    public AgentPreview withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentVersion")
    public String agentVersion;
    public AgentPreview withAgentVersion(String agentVersion) {
        this.agentVersion = agentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroup")
    public String autoScalingGroup;
    public AgentPreview withAutoScalingGroup(String autoScalingGroup) {
        this.autoScalingGroup = autoScalingGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public AgentPreview withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4Address")
    public String ipv4Address;
    public AgentPreview withIpv4Address(String ipv4Address) {
        this.ipv4Address = ipv4Address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernelVersion")
    public String kernelVersion;
    public AgentPreview withKernelVersion(String kernelVersion) {
        this.kernelVersion = kernelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystem")
    public String operatingSystem;
    public AgentPreview withOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
}