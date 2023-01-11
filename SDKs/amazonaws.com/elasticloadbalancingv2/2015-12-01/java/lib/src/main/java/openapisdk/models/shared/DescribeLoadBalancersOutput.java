package openapisdk.models.shared;



public class DescribeLoadBalancersOutput {
    public LoadBalancer[] loadBalancers;
    public DescribeLoadBalancersOutput withLoadBalancers(LoadBalancer[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    public String nextMarker;
    public DescribeLoadBalancersOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}