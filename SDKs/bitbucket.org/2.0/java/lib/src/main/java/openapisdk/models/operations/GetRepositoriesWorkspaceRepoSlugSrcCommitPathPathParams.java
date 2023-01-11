package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}