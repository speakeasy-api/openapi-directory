package openapisdk.models.operations;



public class GetConfigureHealthCheckRequest {
    public GetConfigureHealthCheckQueryParams queryParams;
    public GetConfigureHealthCheckRequest withQueryParams(GetConfigureHealthCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConfigureHealthCheckHeaders headers;
    public GetConfigureHealthCheckRequest withHeaders(GetConfigureHealthCheckHeaders headers) {
        this.headers = headers;
        return this;
    }
}