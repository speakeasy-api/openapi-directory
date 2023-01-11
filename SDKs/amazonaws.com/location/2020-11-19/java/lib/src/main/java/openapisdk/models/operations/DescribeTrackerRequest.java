package openapisdk.models.operations;



public class DescribeTrackerRequest {
    public DescribeTrackerPathParams pathParams;
    public DescribeTrackerRequest withPathParams(DescribeTrackerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeTrackerHeaders headers;
    public DescribeTrackerRequest withHeaders(DescribeTrackerHeaders headers) {
        this.headers = headers;
        return this;
    }
}