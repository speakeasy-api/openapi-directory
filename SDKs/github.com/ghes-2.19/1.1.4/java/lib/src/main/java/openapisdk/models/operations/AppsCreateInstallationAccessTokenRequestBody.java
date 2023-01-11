package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppsCreateInstallationAccessTokenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public openapisdk.models.shared.AppPermissions permissions;
    public AppsCreateInstallationAccessTokenRequestBody withPermissions(openapisdk.models.shared.AppPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public String[] repositories;
    public AppsCreateInstallationAccessTokenRequestBody withRepositories(String[] repositories) {
        this.repositories = repositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_ids")
    public Long[] repositoryIds;
    public AppsCreateInstallationAccessTokenRequestBody withRepositoryIds(Long[] repositoryIds) {
        this.repositoryIds = repositoryIds;
        return this;
    }
}