package openapisdk.models.operations;



public class DescribeApplicationRequest {
    public DescribeApplicationPathParams pathParams;
    public DescribeApplicationRequest withPathParams(DescribeApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeApplicationHeaders headers;
    public DescribeApplicationRequest withHeaders(DescribeApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
}