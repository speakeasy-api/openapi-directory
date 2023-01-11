package openapisdk.models.operations;



public class DescribeInputRequest {
    public DescribeInputPathParams pathParams;
    public DescribeInputRequest withPathParams(DescribeInputPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeInputHeaders headers;
    public DescribeInputRequest withHeaders(DescribeInputHeaders headers) {
        this.headers = headers;
        return this;
    }
}