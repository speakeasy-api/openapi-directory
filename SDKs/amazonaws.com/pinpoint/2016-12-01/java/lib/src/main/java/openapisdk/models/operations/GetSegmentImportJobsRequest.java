package openapisdk.models.operations;



public class GetSegmentImportJobsRequest {
    public GetSegmentImportJobsPathParams pathParams;
    public GetSegmentImportJobsRequest withPathParams(GetSegmentImportJobsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSegmentImportJobsQueryParams queryParams;
    public GetSegmentImportJobsRequest withQueryParams(GetSegmentImportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSegmentImportJobsHeaders headers;
    public GetSegmentImportJobsRequest withHeaders(GetSegmentImportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
}