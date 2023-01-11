package openapisdk.models.operations;



public class DescribeVirtualRouterRequest {
    public DescribeVirtualRouterPathParams pathParams;
    public DescribeVirtualRouterRequest withPathParams(DescribeVirtualRouterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeVirtualRouterQueryParams queryParams;
    public DescribeVirtualRouterRequest withQueryParams(DescribeVirtualRouterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeVirtualRouterHeaders headers;
    public DescribeVirtualRouterRequest withHeaders(DescribeVirtualRouterHeaders headers) {
        this.headers = headers;
        return this;
    }
}