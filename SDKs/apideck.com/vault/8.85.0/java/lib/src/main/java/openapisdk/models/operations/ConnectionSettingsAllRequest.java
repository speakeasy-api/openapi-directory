package openapisdk.models.operations;



public class ConnectionSettingsAllRequest {
    public ConnectionSettingsAllPathParams pathParams;
    public ConnectionSettingsAllRequest withPathParams(ConnectionSettingsAllPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConnectionSettingsAllHeaders headers;
    public ConnectionSettingsAllRequest withHeaders(ConnectionSettingsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ConnectionSettingsAllSecurity security;
    public ConnectionSettingsAllRequest withSecurity(ConnectionSettingsAllSecurity security) {
        this.security = security;
        return this;
    }
}