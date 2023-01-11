package openapisdk.models.operations;



public class GetLogsRequest {
    public GetLogsPathParams pathParams;
    public GetLogsRequest withPathParams(GetLogsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLogsQueryParams queryParams;
    public GetLogsRequest withQueryParams(GetLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}