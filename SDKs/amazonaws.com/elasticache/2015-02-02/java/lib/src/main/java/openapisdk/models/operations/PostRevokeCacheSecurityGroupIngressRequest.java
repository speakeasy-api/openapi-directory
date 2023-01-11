package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeCacheSecurityGroupIngressRequest {
    public PostRevokeCacheSecurityGroupIngressQueryParams queryParams;
    public PostRevokeCacheSecurityGroupIngressRequest withQueryParams(PostRevokeCacheSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeCacheSecurityGroupIngressHeaders headers;
    public PostRevokeCacheSecurityGroupIngressRequest withHeaders(PostRevokeCacheSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeCacheSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}