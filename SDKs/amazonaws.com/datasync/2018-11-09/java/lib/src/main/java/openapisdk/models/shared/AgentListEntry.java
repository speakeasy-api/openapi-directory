package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentListEntry
 * Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation is called.
**/
public class AgentListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArn")
    public String agentArn;
    public AgentListEntry withAgentArn(String agentArn) {
        this.agentArn = agentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AgentListEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AgentStatusEnum status;
    public AgentListEntry withStatus(AgentStatusEnum status) {
        this.status = status;
        return this;
    }
}