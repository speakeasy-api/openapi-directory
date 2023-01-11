package openapisdk.models.operations;



public class GetChangeLogsRequest {
    public GetChangeLogsPathParams pathParams;
    public GetChangeLogsRequest withPathParams(GetChangeLogsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChangeLogsQueryParams queryParams;
    public GetChangeLogsRequest withQueryParams(GetChangeLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChangeLogsHeaders headers;
    public GetChangeLogsRequest withHeaders(GetChangeLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
}