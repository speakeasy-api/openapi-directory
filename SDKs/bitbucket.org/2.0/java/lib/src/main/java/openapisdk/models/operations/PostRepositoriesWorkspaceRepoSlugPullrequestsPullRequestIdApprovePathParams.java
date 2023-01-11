package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_request_id")
    public Long pullRequestId;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams withPullRequestId(Long pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}