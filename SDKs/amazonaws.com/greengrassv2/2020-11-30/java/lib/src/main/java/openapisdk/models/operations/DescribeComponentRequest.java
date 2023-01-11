package openapisdk.models.operations;



public class DescribeComponentRequest {
    public DescribeComponentPathParams pathParams;
    public DescribeComponentRequest withPathParams(DescribeComponentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeComponentHeaders headers;
    public DescribeComponentRequest withHeaders(DescribeComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
}