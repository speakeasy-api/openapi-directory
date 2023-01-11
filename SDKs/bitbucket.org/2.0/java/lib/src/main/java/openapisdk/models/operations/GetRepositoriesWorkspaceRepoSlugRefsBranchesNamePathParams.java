package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}