package openapisdk.models.operations;



public class GetJobRequest {
    public GetJobPathParams pathParams;
    public GetJobRequest withPathParams(GetJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJobHeaders headers;
    public GetJobRequest withHeaders(GetJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}