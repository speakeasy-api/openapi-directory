package openapisdk.models.shared;



/**
 * AttachLoadBalancerToSubnetsOutput
 * Contains the output of AttachLoadBalancerToSubnets.
**/
public class AttachLoadBalancerToSubnetsOutput {
    public String[] subnets;
    public AttachLoadBalancerToSubnetsOutput withSubnets(String[] subnets) {
        this.subnets = subnets;
        return this;
    }
}