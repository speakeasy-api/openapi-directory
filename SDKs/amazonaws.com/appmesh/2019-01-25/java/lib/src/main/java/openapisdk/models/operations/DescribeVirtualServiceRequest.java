package openapisdk.models.operations;



public class DescribeVirtualServiceRequest {
    public DescribeVirtualServicePathParams pathParams;
    public DescribeVirtualServiceRequest withPathParams(DescribeVirtualServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeVirtualServiceQueryParams queryParams;
    public DescribeVirtualServiceRequest withQueryParams(DescribeVirtualServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeVirtualServiceHeaders headers;
    public DescribeVirtualServiceRequest withHeaders(DescribeVirtualServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
}