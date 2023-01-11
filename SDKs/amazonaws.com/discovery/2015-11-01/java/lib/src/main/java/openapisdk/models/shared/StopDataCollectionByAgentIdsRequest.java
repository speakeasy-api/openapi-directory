package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopDataCollectionByAgentIdsRequest {
    @JsonProperty("agentIds")
    public String[] agentIds;
    public StopDataCollectionByAgentIdsRequest withAgentIds(String[] agentIds) {
        this.agentIds = agentIds;
        return this;
    }
}