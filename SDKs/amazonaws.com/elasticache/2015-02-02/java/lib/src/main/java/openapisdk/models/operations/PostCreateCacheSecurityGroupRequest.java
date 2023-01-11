package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheSecurityGroupRequest {
    public PostCreateCacheSecurityGroupQueryParams queryParams;
    public PostCreateCacheSecurityGroupRequest withQueryParams(PostCreateCacheSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCacheSecurityGroupHeaders headers;
    public PostCreateCacheSecurityGroupRequest withHeaders(PostCreateCacheSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCacheSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}