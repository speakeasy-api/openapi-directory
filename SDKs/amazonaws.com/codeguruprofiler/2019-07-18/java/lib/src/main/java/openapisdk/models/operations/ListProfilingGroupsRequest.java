package openapisdk.models.operations;



public class ListProfilingGroupsRequest {
    public ListProfilingGroupsQueryParams queryParams;
    public ListProfilingGroupsRequest withQueryParams(ListProfilingGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProfilingGroupsHeaders headers;
    public ListProfilingGroupsRequest withHeaders(ListProfilingGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}