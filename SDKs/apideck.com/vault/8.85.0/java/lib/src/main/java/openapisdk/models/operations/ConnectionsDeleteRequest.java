package openapisdk.models.operations;



public class ConnectionsDeleteRequest {
    public ConnectionsDeletePathParams pathParams;
    public ConnectionsDeleteRequest withPathParams(ConnectionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionsDeleteHeaders headers;
    public ConnectionsDeleteRequest withHeaders(ConnectionsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ConnectionsDeleteSecurity security;
    public ConnectionsDeleteRequest withSecurity(ConnectionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}