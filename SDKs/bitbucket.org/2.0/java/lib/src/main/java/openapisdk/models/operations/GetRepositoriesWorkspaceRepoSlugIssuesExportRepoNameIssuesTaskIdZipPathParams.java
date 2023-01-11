package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_name")
    public String repoName;
    public GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams withRepoName(String repoName) {
        this.repoName = repoName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task_id")
    public String taskId;
    public GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}