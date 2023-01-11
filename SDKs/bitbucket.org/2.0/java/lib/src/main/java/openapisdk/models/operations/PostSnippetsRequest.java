package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSnippetsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostSnippetsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PostSnippetsSecurity security;
    public PostSnippetsRequest withSecurity(PostSnippetsSecurity security) {
        this.security = security;
        return this;
    }
}