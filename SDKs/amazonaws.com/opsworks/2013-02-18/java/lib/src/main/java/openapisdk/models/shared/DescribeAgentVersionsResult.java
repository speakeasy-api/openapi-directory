package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeAgentVersionsResult
 * Contains the response to a <code>DescribeAgentVersions</code> request.
**/
public class DescribeAgentVersionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentVersions")
    public AgentVersion[] agentVersions;
    public DescribeAgentVersionsResult withAgentVersions(AgentVersion[] agentVersions) {
        this.agentVersions = agentVersions;
        return this;
    }
}