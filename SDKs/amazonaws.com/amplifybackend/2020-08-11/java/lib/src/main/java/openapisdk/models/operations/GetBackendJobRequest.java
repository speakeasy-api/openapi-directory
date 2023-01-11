package openapisdk.models.operations;



public class GetBackendJobRequest {
    public GetBackendJobPathParams pathParams;
    public GetBackendJobRequest withPathParams(GetBackendJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBackendJobHeaders headers;
    public GetBackendJobRequest withHeaders(GetBackendJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}