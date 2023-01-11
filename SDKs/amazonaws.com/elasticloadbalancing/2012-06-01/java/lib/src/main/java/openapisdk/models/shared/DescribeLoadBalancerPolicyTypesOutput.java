package openapisdk.models.shared;



/**
 * DescribeLoadBalancerPolicyTypesOutput
 * Contains the output of DescribeLoadBalancerPolicyTypes.
**/
public class DescribeLoadBalancerPolicyTypesOutput {
    public PolicyTypeDescription[] policyTypeDescriptions;
    public DescribeLoadBalancerPolicyTypesOutput withPolicyTypeDescriptions(PolicyTypeDescription[] policyTypeDescriptions) {
        this.policyTypeDescriptions = policyTypeDescriptions;
        return this;
    }
}