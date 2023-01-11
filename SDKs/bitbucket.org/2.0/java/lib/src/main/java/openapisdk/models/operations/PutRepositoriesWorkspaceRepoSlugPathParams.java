package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PutRepositoriesWorkspaceRepoSlugPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutRepositoriesWorkspaceRepoSlugPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}