package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnPremConfig
 * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
**/
public class OnPremConfig {
    @JsonProperty("AgentArns")
    public String[] agentArns;
    public OnPremConfig withAgentArns(String[] agentArns) {
        this.agentArns = agentArns;
        return this;
    }
}