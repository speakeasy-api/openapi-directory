package openapisdk.models.operations;



public class GetDescribeEventsRequest {
    public GetDescribeEventsQueryParams queryParams;
    public GetDescribeEventsRequest withQueryParams(GetDescribeEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeEventsHeaders headers;
    public GetDescribeEventsRequest withHeaders(GetDescribeEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
}