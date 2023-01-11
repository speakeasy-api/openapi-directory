package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProxyRequest {
    public PutProxyHeaders headers;
    public PutProxyRequest withHeaders(PutProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public PutProxyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public PutProxySecurity security;
    public PutProxyRequest withSecurity(PutProxySecurity security) {
        this.security = security;
        return this;
    }
}