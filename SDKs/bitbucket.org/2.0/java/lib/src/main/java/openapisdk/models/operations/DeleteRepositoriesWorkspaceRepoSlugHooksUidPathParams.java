package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugHooksUidPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public DeleteRepositoriesWorkspaceRepoSlugHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugHooksUidPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}