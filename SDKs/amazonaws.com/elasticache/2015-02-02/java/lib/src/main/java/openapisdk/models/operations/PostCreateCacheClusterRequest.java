package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheClusterRequest {
    public PostCreateCacheClusterQueryParams queryParams;
    public PostCreateCacheClusterRequest withQueryParams(PostCreateCacheClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCacheClusterHeaders headers;
    public PostCreateCacheClusterRequest withHeaders(PostCreateCacheClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCacheClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}