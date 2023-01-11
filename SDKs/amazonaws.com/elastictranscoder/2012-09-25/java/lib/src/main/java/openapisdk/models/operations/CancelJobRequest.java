package openapisdk.models.operations;



public class CancelJobRequest {
    public CancelJobPathParams pathParams;
    public CancelJobRequest withPathParams(CancelJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CancelJobHeaders headers;
    public CancelJobRequest withHeaders(CancelJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}