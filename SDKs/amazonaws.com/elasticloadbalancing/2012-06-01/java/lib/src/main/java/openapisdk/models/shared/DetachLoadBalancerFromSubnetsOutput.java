package openapisdk.models.shared;



/**
 * DetachLoadBalancerFromSubnetsOutput
 * Contains the output of DetachLoadBalancerFromSubnets.
**/
public class DetachLoadBalancerFromSubnetsOutput {
    public String[] subnets;
    public DetachLoadBalancerFromSubnetsOutput withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}