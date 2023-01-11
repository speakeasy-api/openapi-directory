package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody {
    @JsonProperty("name")
    public String name;
    public ActionsCreateSelfHostedRunnerGroupForOrgRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runners")
    public Long[] runners;
    public ActionsCreateSelfHostedRunnerGroupForOrgRequestBody withRunners(Long[] runners) {
        this.runners = runners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_repository_ids")
    public Long[] selectedRepositoryIds;
    public ActionsCreateSelfHostedRunnerGroupForOrgRequestBody withSelectedRepositoryIds(Long[] selectedRepositoryIds) {
        this.selectedRepositoryIds = selectedRepositoryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum visibility;
    public ActionsCreateSelfHostedRunnerGroupForOrgRequestBody withVisibility(ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}