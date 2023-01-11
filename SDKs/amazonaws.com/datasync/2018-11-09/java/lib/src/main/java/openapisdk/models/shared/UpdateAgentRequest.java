package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAgentRequest
 * UpdateAgentRequest
**/
public class UpdateAgentRequest {
    @JsonProperty("AgentArn")
    public String agentArn;
    public UpdateAgentRequest withAgentArn(String agentArn) {
        this.agentArn = agentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateAgentRequest withName(String name) {
        this.name = name;
        return this;
    }
}