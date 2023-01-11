package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetUploadedDocumentsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetUploadedDocumentsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetUploadedDocumentsSecurity security;
    public PostGetUploadedDocumentsRequest withSecurity(PostGetUploadedDocumentsSecurity security) {
        this.security = security;
        return this;
    }
}