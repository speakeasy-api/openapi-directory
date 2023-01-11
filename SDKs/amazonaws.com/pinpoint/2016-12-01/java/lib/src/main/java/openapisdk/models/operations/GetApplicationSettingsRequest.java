package openapisdk.models.operations;



public class GetApplicationSettingsRequest {
    public GetApplicationSettingsPathParams pathParams;
    public GetApplicationSettingsRequest withPathParams(GetApplicationSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApplicationSettingsHeaders headers;
    public GetApplicationSettingsRequest withHeaders(GetApplicationSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
}