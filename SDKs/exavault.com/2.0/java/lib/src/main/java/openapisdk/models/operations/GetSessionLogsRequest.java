package openapisdk.models.operations;



public class GetSessionLogsRequest {
    public GetSessionLogsQueryParams queryParams;
    public GetSessionLogsRequest withQueryParams(GetSessionLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSessionLogsHeaders headers;
    public GetSessionLogsRequest withHeaders(GetSessionLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
}