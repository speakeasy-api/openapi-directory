package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugSrcPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PostRepositoriesWorkspaceRepoSlugSrcPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostRepositoriesWorkspaceRepoSlugSrcPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}