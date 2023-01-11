package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheClusterRequest {
    public PostDeleteCacheClusterQueryParams queryParams;
    public PostDeleteCacheClusterRequest withQueryParams(PostDeleteCacheClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCacheClusterHeaders headers;
    public PostDeleteCacheClusterRequest withHeaders(PostDeleteCacheClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCacheClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}