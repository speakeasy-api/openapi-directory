package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResizeClusterRequest {
    public PostResizeClusterQueryParams queryParams;
    public PostResizeClusterRequest withQueryParams(PostResizeClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResizeClusterHeaders headers;
    public PostResizeClusterRequest withHeaders(PostResizeClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResizeClusterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}