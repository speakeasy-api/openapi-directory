package openapisdk.models.operations;



public class DescribeRouteRequest {
    public DescribeRoutePathParams pathParams;
    public DescribeRouteRequest withPathParams(DescribeRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DescribeRouteHeaders headers;
    public DescribeRouteRequest withHeaders(DescribeRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
}