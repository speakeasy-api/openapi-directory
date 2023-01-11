package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest {
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams pathParams;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest withPathParams(PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity security;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest withSecurity(PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity security) {
        this.security = security;
        return this;
    }
}