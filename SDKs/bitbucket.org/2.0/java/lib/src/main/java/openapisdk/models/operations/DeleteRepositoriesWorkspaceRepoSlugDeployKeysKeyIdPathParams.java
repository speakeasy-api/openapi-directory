package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}