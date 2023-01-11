package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=change_id")
    public String changeId;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams withChangeId(String changeId) {
        this.changeId = changeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=issue_id")
    public String issueId;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams withIssueId(String issueId) {
        this.issueId = issueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}