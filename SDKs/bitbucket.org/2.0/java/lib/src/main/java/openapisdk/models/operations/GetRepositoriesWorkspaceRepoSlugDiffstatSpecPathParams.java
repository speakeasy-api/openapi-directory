package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=spec")
    public String spec;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams withSpec(String spec) {
        this.spec = spec;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}