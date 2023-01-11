package openapisdk.models.shared;



public class DescribeLoadBalancersResponse {
    public LoadBalancerState[] loadBalancers;
    public DescribeLoadBalancersResponse withLoadBalancers(LoadBalancerState[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    public String nextToken;
    public DescribeLoadBalancersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}