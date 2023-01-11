package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugComponentsComponentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=component_id")
    public Long componentId;
    public GetRepositoriesWorkspaceRepoSlugComponentsComponentIdPathParams withComponentId(Long componentId) {
        this.componentId = componentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugComponentsComponentIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugComponentsComponentIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}