package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartDataCollectionByAgentIdsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentsConfigurationStatus")
    public AgentConfigurationStatus[] agentsConfigurationStatus;
    public StartDataCollectionByAgentIdsResponse withAgentsConfigurationStatus(AgentConfigurationStatus[] agentsConfigurationStatus) {
        this.agentsConfigurationStatus = agentsConfigurationStatus;
        return this;
    }
}