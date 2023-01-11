package openapisdk.models.operations;



public class GetRequestEnvironmentInfoRequest {
    public GetRequestEnvironmentInfoQueryParams queryParams;
    public GetRequestEnvironmentInfoRequest withQueryParams(GetRequestEnvironmentInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRequestEnvironmentInfoHeaders headers;
    public GetRequestEnvironmentInfoRequest withHeaders(GetRequestEnvironmentInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
}