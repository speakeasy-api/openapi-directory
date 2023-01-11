package openapisdk.models.operations;



public class DescribeVirtualRouterRequest {
    public DescribeVirtualRouterPathParams pathParams;
    public DescribeVirtualRouterRequest withPathParams(DescribeVirtualRouterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeVirtualRouterHeaders headers;
    public DescribeVirtualRouterRequest withHeaders(DescribeVirtualRouterHeaders headers) {
        this.headers = headers;
        return this;
    }
}