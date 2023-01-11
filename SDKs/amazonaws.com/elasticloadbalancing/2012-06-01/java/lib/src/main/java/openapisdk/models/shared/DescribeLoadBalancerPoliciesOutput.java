package openapisdk.models.shared;



/**
 * DescribeLoadBalancerPoliciesOutput
 * Contains the output of DescribeLoadBalancerPolicies.
**/
public class DescribeLoadBalancerPoliciesOutput {
    public PolicyDescription[] policyDescriptions;
    public DescribeLoadBalancerPoliciesOutput withPolicyDescriptions(PolicyDescription[] policyDescriptions) {
        this.policyDescriptions = policyDescriptions;
        return this;
    }
}