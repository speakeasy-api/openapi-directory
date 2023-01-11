package openapisdk.models.operations;



public class ListSuiteRunsRequest {
    public ListSuiteRunsQueryParams queryParams;
    public ListSuiteRunsRequest withQueryParams(ListSuiteRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSuiteRunsHeaders headers;
    public ListSuiteRunsRequest withHeaders(ListSuiteRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
}