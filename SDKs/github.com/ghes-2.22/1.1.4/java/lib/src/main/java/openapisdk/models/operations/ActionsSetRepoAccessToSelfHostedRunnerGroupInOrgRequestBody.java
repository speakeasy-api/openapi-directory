package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody {
    @JsonProperty("selected_repository_ids")
    public Long[] selectedRepositoryIds;
    public ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody withSelectedRepositoryIds(Long[] selectedRepositoryIds) {
        this.selectedRepositoryIds = selectedRepositoryIds;
        return this;
    }
}