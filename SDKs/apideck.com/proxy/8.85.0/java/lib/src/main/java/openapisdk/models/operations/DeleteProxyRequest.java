package openapisdk.models.operations;



public class DeleteProxyRequest {
    public DeleteProxyHeaders headers;
    public DeleteProxyRequest withHeaders(DeleteProxyHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DeleteProxySecurity security;
    public DeleteProxyRequest withSecurity(DeleteProxySecurity security) {
        this.security = security;
        return this;
    }
}