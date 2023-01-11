package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsRequest {
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPathParams pathParams;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsRequest withPathParams(PostRepositoriesWorkspaceRepoSlugPullrequestsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity security;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsRequest withSecurity(PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity security) {
        this.security = security;
        return this;
    }
}