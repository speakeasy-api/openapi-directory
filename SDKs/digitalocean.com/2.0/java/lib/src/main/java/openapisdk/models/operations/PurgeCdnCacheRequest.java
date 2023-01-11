package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PurgeCdnCacheRequest {
    public PurgeCdnCachePathParams pathParams;
    public PurgeCdnCacheRequest withPathParams(PurgeCdnCachePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PurgeCdnCacheRequestBody request;
    public PurgeCdnCacheRequest withRequest(PurgeCdnCacheRequestBody request) {
        this.request = request;
        return this;
    }
}