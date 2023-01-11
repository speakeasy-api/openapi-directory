package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_username")
    public String targetUsername;
    public PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withTargetUsername(String targetUsername) {
        this.targetUsername = targetUsername;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}