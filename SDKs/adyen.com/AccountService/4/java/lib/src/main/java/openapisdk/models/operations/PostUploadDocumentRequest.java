package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadDocumentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostUploadDocumentRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostUploadDocumentSecurity security;
    public PostUploadDocumentRequest withSecurity(PostUploadDocumentSecurity security) {
        this.security = security;
        return this;
    }
}