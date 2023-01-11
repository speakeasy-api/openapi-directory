package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListSelectedReposForOrgSecret200ApplicationJson {
    @JsonProperty("repositories")
    public openapisdk.models.shared.MinimalRepository[] repositories;
    public ActionsListSelectedReposForOrgSecret200ApplicationJson withRepositories(openapisdk.models.shared.MinimalRepository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListSelectedReposForOrgSecret200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}