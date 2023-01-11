package openapisdk.models.operations;



public class GetSegmentExportJobsRequest {
    public GetSegmentExportJobsPathParams pathParams;
    public GetSegmentExportJobsRequest withPathParams(GetSegmentExportJobsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSegmentExportJobsQueryParams queryParams;
    public GetSegmentExportJobsRequest withQueryParams(GetSegmentExportJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSegmentExportJobsHeaders headers;
    public GetSegmentExportJobsRequest withHeaders(GetSegmentExportJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
}