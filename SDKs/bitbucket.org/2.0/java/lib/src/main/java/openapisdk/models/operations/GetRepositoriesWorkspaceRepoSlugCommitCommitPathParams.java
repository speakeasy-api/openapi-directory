package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}