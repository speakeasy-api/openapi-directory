package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizableKeystoreRequest {
    public PostAuthorizableKeystorePathParams pathParams;
    public PostAuthorizableKeystoreRequest withPathParams(PostAuthorizableKeystorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostAuthorizableKeystoreQueryParams queryParams;
    public PostAuthorizableKeystoreRequest withQueryParams(PostAuthorizableKeystoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostAuthorizableKeystoreRequestBody request;
    public PostAuthorizableKeystoreRequest withRequest(PostAuthorizableKeystoreRequestBody request) {
        this.request = request;
        return this;
    }
}