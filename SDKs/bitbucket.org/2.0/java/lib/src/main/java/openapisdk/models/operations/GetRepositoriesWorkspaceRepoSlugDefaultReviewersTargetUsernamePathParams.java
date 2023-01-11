package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_username")
    public String targetUsername;
    public GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withTargetUsername(String targetUsername) {
        this.targetUsername = targetUsername;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}