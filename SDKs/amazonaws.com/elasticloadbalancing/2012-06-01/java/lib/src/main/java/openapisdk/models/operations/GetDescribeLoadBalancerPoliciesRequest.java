package openapisdk.models.operations;



public class GetDescribeLoadBalancerPoliciesRequest {
    public GetDescribeLoadBalancerPoliciesQueryParams queryParams;
    public GetDescribeLoadBalancerPoliciesRequest withQueryParams(GetDescribeLoadBalancerPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDescribeLoadBalancerPoliciesHeaders headers;
    public GetDescribeLoadBalancerPoliciesRequest withHeaders(GetDescribeLoadBalancerPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}