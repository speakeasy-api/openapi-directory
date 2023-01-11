package openapisdk.models.operations;



public class GetSettingsRequest {
    public GetSettingsPathParams pathParams;
    public GetSettingsRequest withPathParams(GetSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSettingsHeaders headers;
    public GetSettingsRequest withHeaders(GetSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
}