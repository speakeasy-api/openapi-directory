package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_request_id")
    public Long pullRequestId;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams withPullRequestId(Long pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}