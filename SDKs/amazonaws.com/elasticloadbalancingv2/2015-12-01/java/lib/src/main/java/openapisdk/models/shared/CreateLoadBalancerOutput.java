package openapisdk.models.shared;



public class CreateLoadBalancerOutput {
    public LoadBalancer[] loadBalancers;
    public CreateLoadBalancerOutput withLoadBalancers(LoadBalancer[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
}