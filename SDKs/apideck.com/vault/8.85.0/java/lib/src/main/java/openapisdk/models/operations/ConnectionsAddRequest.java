package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsAddRequest {
    public ConnectionsAddPathParams pathParams;
    public ConnectionsAddRequest withPathParams(ConnectionsAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionsAddHeaders headers;
    public ConnectionsAddRequest withHeaders(ConnectionsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionInput request;
    public ConnectionsAddRequest withRequest(openapisdk.models.shared.ConnectionInput request) {
        this.request = request;
        return this;
    }
    public ConnectionsAddSecurity security;
    public ConnectionsAddRequest withSecurity(ConnectionsAddSecurity security) {
        this.security = security;
        return this;
    }
}