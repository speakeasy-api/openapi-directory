package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProxyRequest {
    public PostProxyHeaders headers;
    public PostProxyRequest withHeaders(PostProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public PostProxyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public PostProxySecurity security;
    public PostProxyRequest withSecurity(PostProxySecurity security) {
        this.security = security;
        return this;
    }
}