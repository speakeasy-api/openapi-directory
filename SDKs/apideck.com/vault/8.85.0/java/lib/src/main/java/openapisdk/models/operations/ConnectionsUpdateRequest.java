package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsUpdateRequest {
    public ConnectionsUpdatePathParams pathParams;
    public ConnectionsUpdateRequest withPathParams(ConnectionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionsUpdateHeaders headers;
    public ConnectionsUpdateRequest withHeaders(ConnectionsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionInput request;
    public ConnectionsUpdateRequest withRequest(openapisdk.models.shared.ConnectionInput request) {
        this.request = request;
        return this;
    }
    public ConnectionsUpdateSecurity security;
    public ConnectionsUpdateRequest withSecurity(ConnectionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}