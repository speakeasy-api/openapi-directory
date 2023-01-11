package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateArticleUploadInitiateRequest {
    public PrivateArticleUploadInitiatePathParams pathParams;
    public PrivateArticleUploadInitiateRequest withPathParams(PrivateArticleUploadInitiatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileCreator request;
    public PrivateArticleUploadInitiateRequest withRequest(openapisdk.models.shared.FileCreator request) {
        this.request = request;
        return this;
    }
    public PrivateArticleUploadInitiateSecurity security;
    public PrivateArticleUploadInitiateRequest withSecurity(PrivateArticleUploadInitiateSecurity security) {
        this.security = security;
        return this;
    }
}