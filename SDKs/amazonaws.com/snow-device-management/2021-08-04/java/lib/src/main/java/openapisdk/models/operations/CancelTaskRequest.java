package openapisdk.models.operations;



public class CancelTaskRequest {
    public CancelTaskPathParams pathParams;
    public CancelTaskRequest withPathParams(CancelTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelTaskHeaders headers;
    public CancelTaskRequest withHeaders(CancelTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
}