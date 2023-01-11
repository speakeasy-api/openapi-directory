package openapisdk.models.operations;



public class UpdateSettingValueRequest {
    public UpdateSettingValuePathParams pathParams;
    public UpdateSettingValueRequest withPathParams(UpdateSettingValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSettingValueQueryParams queryParams;
    public UpdateSettingValueRequest withQueryParams(UpdateSettingValueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateSettingValueRequests request;
    public UpdateSettingValueRequest withRequest(UpdateSettingValueRequests request) {
        this.request = request;
        return this;
    }
}