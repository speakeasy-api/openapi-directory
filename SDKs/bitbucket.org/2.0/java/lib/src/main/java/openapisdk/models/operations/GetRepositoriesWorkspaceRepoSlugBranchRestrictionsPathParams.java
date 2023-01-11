package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}