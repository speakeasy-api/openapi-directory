package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAgentResponse
 * CreateAgentResponse
**/
public class CreateAgentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArn")
    public String agentArn;
    public CreateAgentResponse withAgentArn(String agentArn) {
        this.agentArn = agentArn;
        return this;
    }
}