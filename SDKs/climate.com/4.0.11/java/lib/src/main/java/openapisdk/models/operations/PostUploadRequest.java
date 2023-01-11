package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadRequest {
    public PostUploadHeaders headers;
    public PostUploadRequest withHeaders(PostUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Upload request;
    public PostUploadRequest withRequest(openapisdk.models.shared.Upload request) {
        this.request = request;
        return this;
    }
    public PostUploadSecurity security;
    public PostUploadRequest withSecurity(PostUploadSecurity security) {
        this.security = security;
        return this;
    }
}