package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSnippetsWorkspaceRequest {
    public PostSnippetsWorkspacePathParams pathParams;
    public PostSnippetsWorkspaceRequest withPathParams(PostSnippetsWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostSnippetsWorkspaceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostSnippetsWorkspaceSecurity security;
    public PostSnippetsWorkspaceRequest withSecurity(PostSnippetsWorkspaceSecurity security) {
        this.security = security;
        return this;
    }
}