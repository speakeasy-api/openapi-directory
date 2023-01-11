package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AgentFilter
 * Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
**/
public class AgentFilter {
    @JsonProperty("agentHealthCodes")
    public AgentHealthCodeEnum[] agentHealthCodes;
    public AgentFilter withAgentHealthCodes(AgentHealthCodeEnum[] agentHealthCodes) {
        this.agentHealthCodes = agentHealthCodes;
        return this;
    }
    @JsonProperty("agentHealths")
    public AgentHealthEnum[] agentHealths;
    public AgentFilter withAgentHealths(AgentHealthEnum[] agentHealths) {
        this.agentHealths = agentHealths;
        return this;
    }
}