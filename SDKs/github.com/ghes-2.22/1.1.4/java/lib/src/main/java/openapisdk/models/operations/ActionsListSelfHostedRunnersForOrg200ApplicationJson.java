package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelfHostedRunnersForOrg200ApplicationJson {
    @JsonProperty("runners")
    public openapisdk.models.shared.RunnerNoLabels[] runners;
    public ActionsListSelfHostedRunnersForOrg200ApplicationJson withRunners(openapisdk.models.shared.RunnerNoLabels[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public ActionsListSelfHostedRunnersForOrg200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}