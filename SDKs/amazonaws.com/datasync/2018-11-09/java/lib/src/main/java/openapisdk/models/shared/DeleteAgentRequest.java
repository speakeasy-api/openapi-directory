package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteAgentRequest
 * DeleteAgentRequest
**/
public class DeleteAgentRequest {
    @JsonProperty("AgentArn")
    public String agentArn;
    public DeleteAgentRequest withAgentArn(String agentArn) {
        this.agentArn = agentArn;
        return this;
    }
}