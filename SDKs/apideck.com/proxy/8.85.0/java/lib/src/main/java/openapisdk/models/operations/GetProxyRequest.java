package openapisdk.models.operations;



public class GetProxyRequest {
    public GetProxyHeaders headers;
    public GetProxyRequest withHeaders(GetProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetProxySecurity security;
    public GetProxyRequest withSecurity(GetProxySecurity security) {
        this.security = security;
        return this;
    }
}