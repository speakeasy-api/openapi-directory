package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewAgentsResponse {
    @JsonProperty("agentPreviews")
    public AgentPreview[] agentPreviews;
    public PreviewAgentsResponse withAgentPreviews(AgentPreview[] agentPreviews) {
        this.agentPreviews = agentPreviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public PreviewAgentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}