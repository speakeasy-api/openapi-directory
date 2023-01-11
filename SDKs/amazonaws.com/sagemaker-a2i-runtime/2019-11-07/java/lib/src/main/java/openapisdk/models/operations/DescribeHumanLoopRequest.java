package openapisdk.models.operations;



public class DescribeHumanLoopRequest {
    public DescribeHumanLoopPathParams pathParams;
    public DescribeHumanLoopRequest withPathParams(DescribeHumanLoopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeHumanLoopHeaders headers;
    public DescribeHumanLoopRequest withHeaders(DescribeHumanLoopHeaders headers) {
        this.headers = headers;
        return this;
    }
}