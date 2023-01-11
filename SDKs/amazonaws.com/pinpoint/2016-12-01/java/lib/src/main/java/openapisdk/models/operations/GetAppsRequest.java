package openapisdk.models.operations;



public class GetAppsRequest {
    public GetAppsQueryParams queryParams;
    public GetAppsRequest withQueryParams(GetAppsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAppsHeaders headers;
    public GetAppsRequest withHeaders(GetAppsHeaders headers) {
        this.headers = headers;
        return this;
    }
}