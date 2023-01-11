package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}