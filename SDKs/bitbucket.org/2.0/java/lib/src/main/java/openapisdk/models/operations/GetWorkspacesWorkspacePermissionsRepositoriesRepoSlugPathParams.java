package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}