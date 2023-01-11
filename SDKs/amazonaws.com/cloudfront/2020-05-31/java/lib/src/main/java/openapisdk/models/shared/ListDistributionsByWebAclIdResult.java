package openapisdk.models.shared;



/**
 * ListDistributionsByWebAclIdResult
 * The response to a request to list the distributions that are associated with a specified WAF web ACL.
**/
public class ListDistributionsByWebAclIdResult {
    public DistributionList distributionList;
    public ListDistributionsByWebAclIdResult withDistributionList(DistributionList distributionList) {
        this.distributionList = distributionList;
        return this;
    }
}