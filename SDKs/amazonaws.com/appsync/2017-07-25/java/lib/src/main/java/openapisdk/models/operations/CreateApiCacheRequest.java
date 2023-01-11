package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiCacheRequest {
    public CreateApiCachePathParams pathParams;
    public CreateApiCacheRequest withPathParams(CreateApiCachePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateApiCacheHeaders headers;
    public CreateApiCacheRequest withHeaders(CreateApiCacheHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateApiCacheRequestBody request;
    public CreateApiCacheRequest withRequest(CreateApiCacheRequestBody request) {
        this.request = request;
        return this;
    }
}