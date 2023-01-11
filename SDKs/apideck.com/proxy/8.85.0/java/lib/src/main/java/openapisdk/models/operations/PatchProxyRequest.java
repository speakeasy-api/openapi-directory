package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchProxyRequest {
    public PatchProxyHeaders headers;
    public PatchProxyRequest withHeaders(PatchProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=*/*")
    public byte[] request;
    public PatchProxyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public PatchProxySecurity security;
    public PatchProxyRequest withSecurity(PatchProxySecurity security) {
        this.security = security;
        return this;
    }
}