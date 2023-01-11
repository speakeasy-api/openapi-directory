package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsTokenRequest {
    public ConnectionsTokenPathParams pathParams;
    public ConnectionsTokenRequest withPathParams(ConnectionsTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionsTokenHeaders headers;
    public ConnectionsTokenRequest withHeaders(ConnectionsTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ConnectionsTokenRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ConnectionsTokenSecurity security;
    public ConnectionsTokenRequest withSecurity(ConnectionsTokenSecurity security) {
        this.security = security;
        return this;
    }
}