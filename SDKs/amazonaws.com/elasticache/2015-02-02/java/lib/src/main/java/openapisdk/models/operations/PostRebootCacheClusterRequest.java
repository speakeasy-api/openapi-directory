package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebootCacheClusterRequest {
    public PostRebootCacheClusterQueryParams queryParams;
    public PostRebootCacheClusterRequest withQueryParams(PostRebootCacheClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRebootCacheClusterHeaders headers;
    public PostRebootCacheClusterRequest withHeaders(PostRebootCacheClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRebootCacheClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}