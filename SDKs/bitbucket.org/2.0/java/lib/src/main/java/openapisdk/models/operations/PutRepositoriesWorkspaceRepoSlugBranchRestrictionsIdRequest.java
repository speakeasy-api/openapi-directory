package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest {
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams pathParams;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest withPathParams(PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity security;
    public PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest withSecurity(PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity security) {
        this.security = security;
        return this;
    }
}