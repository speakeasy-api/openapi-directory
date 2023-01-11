package openapisdk.models.operations;



public class GetImportJobsRequest {
    public GetImportJobsPathParams pathParams;
    public GetImportJobsRequest withPathParams(GetImportJobsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetImportJobsQueryParams queryParams;
    public GetImportJobsRequest withQueryParams(GetImportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetImportJobsHeaders headers;
    public GetImportJobsRequest withHeaders(GetImportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
}