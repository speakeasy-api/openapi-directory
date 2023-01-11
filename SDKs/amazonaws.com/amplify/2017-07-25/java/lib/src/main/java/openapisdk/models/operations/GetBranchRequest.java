package openapisdk.models.operations;



public class GetBranchRequest {
    public GetBranchPathParams pathParams;
    public GetBranchRequest withPathParams(GetBranchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBranchHeaders headers;
    public GetBranchRequest withHeaders(GetBranchHeaders headers) {
        this.headers = headers;
        return this;
    }
}