package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}