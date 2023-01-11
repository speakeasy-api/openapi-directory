package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_id")
    public String issueId;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}