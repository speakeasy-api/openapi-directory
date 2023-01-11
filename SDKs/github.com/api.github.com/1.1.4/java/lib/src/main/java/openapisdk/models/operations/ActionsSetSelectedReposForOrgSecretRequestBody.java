package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsSetSelectedReposForOrgSecretRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selected_repository_ids")
    public Long[] selectedRepositoryIds;
    public ActionsSetSelectedReposForOrgSecretRequestBody withSelectedRepositoryIds(Long[] selectedRepositoryIds) {
        this.selectedRepositoryIds = selectedRepositoryIds;
        return this;
    }
}