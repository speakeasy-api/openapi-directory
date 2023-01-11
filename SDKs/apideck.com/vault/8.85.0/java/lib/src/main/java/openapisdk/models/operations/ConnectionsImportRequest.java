package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionsImportRequest {
    public ConnectionsImportPathParams pathParams;
    public ConnectionsImportRequest withPathParams(ConnectionsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionsImportHeaders headers;
    public ConnectionsImportRequest withHeaders(ConnectionsImportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionImportData request;
    public ConnectionsImportRequest withRequest(openapisdk.models.shared.ConnectionImportData request) {
        this.request = request;
        return this;
    }
    public ConnectionsImportSecurity security;
    public ConnectionsImportRequest withSecurity(ConnectionsImportSecurity security) {
        this.security = security;
        return this;
    }
}