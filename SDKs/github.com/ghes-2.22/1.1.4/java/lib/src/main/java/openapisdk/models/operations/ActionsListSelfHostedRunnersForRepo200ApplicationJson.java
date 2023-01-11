package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelfHostedRunnersForRepo200ApplicationJson {
    @JsonProperty("runners")
    public openapisdk.models.shared.RunnerNoLabels[] runners;
    public ActionsListSelfHostedRunnersForRepo200ApplicationJson withRunners(openapisdk.models.shared.RunnerNoLabels[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public ActionsListSelfHostedRunnersForRepo200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}