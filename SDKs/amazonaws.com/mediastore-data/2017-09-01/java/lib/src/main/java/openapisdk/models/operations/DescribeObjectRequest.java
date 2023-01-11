package openapisdk.models.operations;



public class DescribeObjectRequest {
    public DescribeObjectPathParams pathParams;
    public DescribeObjectRequest withPathParams(DescribeObjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeObjectHeaders headers;
    public DescribeObjectRequest withHeaders(DescribeObjectHeaders headers) {
        this.headers = headers;
        return this;
    }
}