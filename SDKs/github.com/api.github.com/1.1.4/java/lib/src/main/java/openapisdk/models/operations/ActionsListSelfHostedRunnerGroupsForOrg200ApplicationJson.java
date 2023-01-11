package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson {
    @JsonProperty("runner_groups")
    public openapisdk.models.shared.RunnerGroupsOrg[] runnerGroups;
    public ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson withRunnerGroups(openapisdk.models.shared.RunnerGroupsOrg[] runnerGroups) {
        this.runnerGroups = runnerGroups;
        return this;
    }
    @JsonProperty("total_count")
    public Double totalCount;
    public ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson withTotalCount(Double totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}