package openapisdk.models.operations;



public class GetJobOutputRequest {
    public GetJobOutputPathParams pathParams;
    public GetJobOutputRequest withPathParams(GetJobOutputPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJobOutputHeaders headers;
    public GetJobOutputRequest withHeaders(GetJobOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
}