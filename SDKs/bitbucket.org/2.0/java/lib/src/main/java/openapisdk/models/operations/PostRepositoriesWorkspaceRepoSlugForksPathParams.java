package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugForksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PostRepositoriesWorkspaceRepoSlugForksPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostRepositoriesWorkspaceRepoSlugForksPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}