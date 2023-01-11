package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheSecurityGroupRequest {
    public PostDeleteCacheSecurityGroupQueryParams queryParams;
    public PostDeleteCacheSecurityGroupRequest withQueryParams(PostDeleteCacheSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteCacheSecurityGroupHeaders headers;
    public PostDeleteCacheSecurityGroupRequest withHeaders(PostDeleteCacheSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteCacheSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}