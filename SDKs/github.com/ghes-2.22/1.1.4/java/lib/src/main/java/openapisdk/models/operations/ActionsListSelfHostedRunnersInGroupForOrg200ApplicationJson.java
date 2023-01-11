package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson {
    @JsonProperty("runners")
    public openapisdk.models.shared.RunnerNoLabels[] runners;
    public ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson withRunners(openapisdk.models.shared.RunnerNoLabels[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}