package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_request_id")
    public Long pullRequestId;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePathParams withPullRequestId(Long pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}