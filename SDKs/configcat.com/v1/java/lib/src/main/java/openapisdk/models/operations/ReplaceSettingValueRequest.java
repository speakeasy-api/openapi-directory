package openapisdk.models.operations;



public class ReplaceSettingValueRequest {
    public ReplaceSettingValuePathParams pathParams;
    public ReplaceSettingValueRequest withPathParams(ReplaceSettingValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReplaceSettingValueQueryParams queryParams;
    public ReplaceSettingValueRequest withQueryParams(ReplaceSettingValueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReplaceSettingValueRequests request;
    public ReplaceSettingValueRequest withRequest(ReplaceSettingValueRequests request) {
        this.request = request;
        return this;
    }
}