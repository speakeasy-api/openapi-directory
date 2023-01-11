package openapisdk.models.operations;



public class GetRestartAppServerRequest {
    public GetRestartAppServerQueryParams queryParams;
    public GetRestartAppServerRequest withQueryParams(GetRestartAppServerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRestartAppServerHeaders headers;
    public GetRestartAppServerRequest withHeaders(GetRestartAppServerHeaders headers) {
        this.headers = headers;
        return this;
    }
}