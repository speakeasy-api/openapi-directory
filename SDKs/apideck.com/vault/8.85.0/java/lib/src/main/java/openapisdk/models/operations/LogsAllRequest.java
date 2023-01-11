package openapisdk.models.operations;



public class LogsAllRequest {
    public LogsAllQueryParams queryParams;
    public LogsAllRequest withQueryParams(LogsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LogsAllHeaders headers;
    public LogsAllRequest withHeaders(LogsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public LogsAllSecurity security;
    public LogsAllRequest withSecurity(LogsAllSecurity security) {
        this.security = security;
        return this;
    }
}