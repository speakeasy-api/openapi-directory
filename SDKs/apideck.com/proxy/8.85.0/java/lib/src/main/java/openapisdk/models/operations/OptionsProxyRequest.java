package openapisdk.models.operations;



public class OptionsProxyRequest {
    public OptionsProxyHeaders headers;
    public OptionsProxyRequest withHeaders(OptionsProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OptionsProxySecurity security;
    public OptionsProxyRequest withSecurity(OptionsProxySecurity security) {
        this.security = security;
        return this;
    }
}