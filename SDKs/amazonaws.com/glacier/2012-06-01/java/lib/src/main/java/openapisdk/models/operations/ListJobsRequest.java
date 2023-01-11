package openapisdk.models.operations;



public class ListJobsRequest {
    public ListJobsPathParams pathParams;
    public ListJobsRequest withPathParams(ListJobsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListJobsQueryParams queryParams;
    public ListJobsRequest withQueryParams(ListJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListJobsHeaders headers;
    public ListJobsRequest withHeaders(ListJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
}