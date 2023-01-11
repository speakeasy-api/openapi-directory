package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pull_request_id")
    public Long pullRequestId;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams withPullRequestId(Long pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}