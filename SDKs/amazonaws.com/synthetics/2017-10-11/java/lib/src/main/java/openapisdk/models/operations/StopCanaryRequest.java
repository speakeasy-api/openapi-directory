package openapisdk.models.operations;



public class StopCanaryRequest {
    public StopCanaryPathParams pathParams;
    public StopCanaryRequest withPathParams(StopCanaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopCanaryHeaders headers;
    public StopCanaryRequest withHeaders(StopCanaryHeaders headers) {
        this.headers = headers;
        return this;
    }
}