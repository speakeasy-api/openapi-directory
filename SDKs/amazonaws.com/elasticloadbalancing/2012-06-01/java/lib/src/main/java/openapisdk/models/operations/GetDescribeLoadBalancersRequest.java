package openapisdk.models.operations;



public class GetDescribeLoadBalancersRequest {
    public GetDescribeLoadBalancersQueryParams queryParams;
    public GetDescribeLoadBalancersRequest withQueryParams(GetDescribeLoadBalancersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeLoadBalancersHeaders headers;
    public GetDescribeLoadBalancersRequest withHeaders(GetDescribeLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
}