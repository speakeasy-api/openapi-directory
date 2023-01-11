package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody {
    @JsonProperty("runners")
    public Long[] runners;
    public ActionsSetSelfHostedRunnersInGroupForOrgRequestBody withRunners(Long[] runners) {
        this.runners = runners;
        return this;
    }
}