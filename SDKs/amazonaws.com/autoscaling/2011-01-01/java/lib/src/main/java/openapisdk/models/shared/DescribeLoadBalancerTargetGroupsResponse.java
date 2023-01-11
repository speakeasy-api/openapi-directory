package openapisdk.models.shared;



public class DescribeLoadBalancerTargetGroupsResponse {
    public LoadBalancerTargetGroupState[] loadBalancerTargetGroups;
    public DescribeLoadBalancerTargetGroupsResponse withLoadBalancerTargetGroups(LoadBalancerTargetGroupState[] loadBalancerTargetGroups) {
        this.loadBalancerTargetGroups = loadBalancerTargetGroups;
        return this;
    }
    public String nextToken;
    public DescribeLoadBalancerTargetGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}