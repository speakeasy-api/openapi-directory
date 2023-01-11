package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_id")
    public String issueId;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}