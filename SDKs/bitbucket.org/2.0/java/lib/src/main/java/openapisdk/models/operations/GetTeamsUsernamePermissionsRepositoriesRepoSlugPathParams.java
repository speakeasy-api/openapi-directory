package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}