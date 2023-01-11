package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectionSettingsUpdateRequest {
    public ConnectionSettingsUpdatePathParams pathParams;
    public ConnectionSettingsUpdateRequest withPathParams(ConnectionSettingsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionSettingsUpdateHeaders headers;
    public ConnectionSettingsUpdateRequest withHeaders(ConnectionSettingsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConnectionInput request;
    public ConnectionSettingsUpdateRequest withRequest(openapisdk.models.shared.ConnectionInput request) {
        this.request = request;
        return this;
    }
    public ConnectionSettingsUpdateSecurity security;
    public ConnectionSettingsUpdateRequest withSecurity(ConnectionSettingsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}