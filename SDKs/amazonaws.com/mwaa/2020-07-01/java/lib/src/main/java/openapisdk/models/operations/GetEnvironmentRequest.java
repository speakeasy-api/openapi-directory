package openapisdk.models.operations;



public class GetEnvironmentRequest {
    public GetEnvironmentPathParams pathParams;
    public GetEnvironmentRequest withPathParams(GetEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEnvironmentHeaders headers;
    public GetEnvironmentRequest withHeaders(GetEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}