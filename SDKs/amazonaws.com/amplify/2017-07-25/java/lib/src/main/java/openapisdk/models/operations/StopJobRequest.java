package openapisdk.models.operations;



public class StopJobRequest {
    public StopJobPathParams pathParams;
    public StopJobRequest withPathParams(StopJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StopJobHeaders headers;
    public StopJobRequest withHeaders(StopJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}