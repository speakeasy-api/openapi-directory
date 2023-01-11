package openapisdk.models.operations;



public class DescribeJobRequest {
    public DescribeJobPathParams pathParams;
    public DescribeJobRequest withPathParams(DescribeJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeJobHeaders headers;
    public DescribeJobRequest withHeaders(DescribeJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}