package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartDataCollectionByAgentIdsRequest {
    @JsonProperty("agentIds")
    public String[] agentIds;
    public StartDataCollectionByAgentIdsRequest withAgentIds(String[] agentIds) {
        this.agentIds = agentIds;
        return this;
    }
}