package openapisdk.models.operations;



public class CreateSettingRequest {
    public CreateSettingPathParams pathParams;
    public CreateSettingRequest withPathParams(CreateSettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSettingRequests request;
    public CreateSettingRequest withRequest(CreateSettingRequests request) {
        this.request = request;
        return this;
    }
}