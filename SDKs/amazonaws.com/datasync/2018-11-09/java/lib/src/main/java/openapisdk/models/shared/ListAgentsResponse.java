package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAgentsResponse
 * ListAgentsResponse
**/
public class ListAgentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Agents")
    public AgentListEntry[] agents;
    public ListAgentsResponse withAgents(AgentListEntry[] agents) {
        this.agents = agents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAgentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}