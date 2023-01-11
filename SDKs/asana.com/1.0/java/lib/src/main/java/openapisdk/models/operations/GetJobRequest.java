package openapisdk.models.operations;



public class GetJobRequest {
    public GetJobPathParams pathParams;
    public GetJobRequest withPathParams(GetJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetJobQueryParams queryParams;
    public GetJobRequest withQueryParams(GetJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}