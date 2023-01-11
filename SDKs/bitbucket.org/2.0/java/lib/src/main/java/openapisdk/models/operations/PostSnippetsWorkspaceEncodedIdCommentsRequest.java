package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSnippetsWorkspaceEncodedIdCommentsRequest {
    public PostSnippetsWorkspaceEncodedIdCommentsPathParams pathParams;
    public PostSnippetsWorkspaceEncodedIdCommentsRequest withPathParams(PostSnippetsWorkspaceEncodedIdCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostSnippetsWorkspaceEncodedIdCommentsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostSnippetsWorkspaceEncodedIdCommentsSecurity security;
    public PostSnippetsWorkspaceEncodedIdCommentsRequest withSecurity(PostSnippetsWorkspaceEncodedIdCommentsSecurity security) {
        this.security = security;
        return this;
    }
}