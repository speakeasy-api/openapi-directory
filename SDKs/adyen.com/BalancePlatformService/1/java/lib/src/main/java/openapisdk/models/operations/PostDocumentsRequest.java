package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDocumentsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDocumentsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDocumentsSecurity security;
    public PostDocumentsRequest withSecurity(PostDocumentsSecurity security) {
        this.security = security;
        return this;
    }
}