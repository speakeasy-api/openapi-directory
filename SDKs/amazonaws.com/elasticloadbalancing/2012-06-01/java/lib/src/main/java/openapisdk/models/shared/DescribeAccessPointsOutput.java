package openapisdk.models.shared;



/**
 * DescribeAccessPointsOutput
 * Contains the parameters for DescribeLoadBalancers.
**/
public class DescribeAccessPointsOutput {
    public LoadBalancerDescription[] loadBalancerDescriptions;
    public DescribeAccessPointsOutput withLoadBalancerDescriptions(LoadBalancerDescription[] loadBalancerDescriptions) {
        this.loadBalancerDescriptions = loadBalancerDescriptions;
        return this;
    }
    public String nextMarker;
    public DescribeAccessPointsOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}