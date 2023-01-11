package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest {
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams pathParams;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest withPathParams(PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity security;
    public PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest withSecurity(PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity security) {
        this.security = security;
        return this;
    }
}