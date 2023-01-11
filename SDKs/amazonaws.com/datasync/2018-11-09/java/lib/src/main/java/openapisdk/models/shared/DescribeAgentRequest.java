package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeAgentRequest
 * DescribeAgent
**/
public class DescribeAgentRequest {
    @JsonProperty("AgentArn")
    public String agentArn;
    public DescribeAgentRequest withAgentArn(String agentArn) {
        this.agentArn = agentArn;
        return this;
    }
}