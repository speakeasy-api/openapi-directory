package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version_id")
    public Long versionId;
    public GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams withVersionId(Long versionId) {
        this.versionId = versionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}