package openapisdk.models.operations;



public class DescribeIndexRequest {
    public DescribeIndexPathParams pathParams;
    public DescribeIndexRequest withPathParams(DescribeIndexPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeIndexHeaders headers;
    public DescribeIndexRequest withHeaders(DescribeIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
}