package openapisdk.models.shared;



/**
 * DescribeLoadBalancerAttributesOutput
 * Contains the output of DescribeLoadBalancerAttributes.
**/
public class DescribeLoadBalancerAttributesOutput {
    public LoadBalancerAttributes loadBalancerAttributes;
    public DescribeLoadBalancerAttributesOutput withLoadBalancerAttributes(LoadBalancerAttributes loadBalancerAttributes) {
        this.loadBalancerAttributes = loadBalancerAttributes;
        return this;
    }
}