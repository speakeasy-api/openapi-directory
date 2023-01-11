package openapisdk.models.shared;



/**
 * ApplySecurityGroupsToLoadBalancerOutput
 * Contains the output of ApplySecurityGroupsToLoadBalancer.
**/
public class ApplySecurityGroupsToLoadBalancerOutput {
    public String[] securityGroups;
    public ApplySecurityGroupsToLoadBalancerOutput withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
}