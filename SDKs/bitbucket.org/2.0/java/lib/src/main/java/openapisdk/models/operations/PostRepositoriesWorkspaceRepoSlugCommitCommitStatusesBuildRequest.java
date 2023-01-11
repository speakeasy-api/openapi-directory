package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest {
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest withPathParams(PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity security;
    public PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest withSecurity(PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity security) {
        this.security = security;
        return this;
    }
}