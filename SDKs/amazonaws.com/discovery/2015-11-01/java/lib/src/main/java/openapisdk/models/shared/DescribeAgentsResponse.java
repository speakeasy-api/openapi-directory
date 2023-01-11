package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAgentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentsInfo")
    public AgentInfo[] agentsInfo;
    public DescribeAgentsResponse withAgentsInfo(AgentInfo[] agentsInfo) {
        this.agentsInfo = agentsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeAgentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}