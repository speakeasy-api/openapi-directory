package openapisdk.models.shared;



/**
 * EnvironmentResourcesDescription
 * Describes the AWS resources in use by this environment. This data is not live data.
**/
public class EnvironmentResourcesDescription {
    public LoadBalancerDescription loadBalancer;
    public EnvironmentResourcesDescription withLoadBalancer(LoadBalancerDescription loadBalancer) {
        this.loadBalancer = loadBalancer;
        return this;
    }
}