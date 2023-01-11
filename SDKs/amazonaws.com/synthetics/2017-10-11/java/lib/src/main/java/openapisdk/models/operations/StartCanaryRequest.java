package openapisdk.models.operations;



public class StartCanaryRequest {
    public StartCanaryPathParams pathParams;
    public StartCanaryRequest withPathParams(StartCanaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartCanaryHeaders headers;
    public StartCanaryRequest withHeaders(StartCanaryHeaders headers) {
        this.headers = headers;
        return this;
    }
}