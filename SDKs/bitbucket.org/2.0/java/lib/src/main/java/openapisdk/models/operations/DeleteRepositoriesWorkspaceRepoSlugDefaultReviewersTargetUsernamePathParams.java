package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_username")
    public String targetUsername;
    public DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withTargetUsername(String targetUsername) {
        this.targetUsername = targetUsername;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}