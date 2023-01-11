package openapisdk.models.operations;



public class DescribeMapRequest {
    public DescribeMapPathParams pathParams;
    public DescribeMapRequest withPathParams(DescribeMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeMapHeaders headers;
    public DescribeMapRequest withHeaders(DescribeMapHeaders headers) {
        this.headers = headers;
        return this;
    }
}