package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revision")
    public String revision;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}