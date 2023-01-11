package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}