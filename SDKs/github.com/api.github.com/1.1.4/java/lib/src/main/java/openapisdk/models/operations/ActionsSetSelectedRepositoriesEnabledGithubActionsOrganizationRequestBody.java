package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody {
    @JsonProperty("selected_repository_ids")
    public Long[] selectedRepositoryIds;
    public ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody withSelectedRepositoryIds(Long[] selectedRepositoryIds) {
        this.selectedRepositoryIds = selectedRepositoryIds;
        return this;
    }
}