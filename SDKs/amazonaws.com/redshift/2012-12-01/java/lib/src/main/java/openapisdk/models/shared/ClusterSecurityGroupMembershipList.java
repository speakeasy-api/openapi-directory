package openapisdk.models.shared;



/**
 * ClusterSecurityGroupMembershipList
 * Describes a cluster security group.
**/
public class ClusterSecurityGroupMembershipList {
    public String clusterSecurityGroupName;
    public ClusterSecurityGroupMembershipList withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    public String status;
    public ClusterSecurityGroupMembershipList withStatus(String status) {
        this.status = status;
        return this;
    }
}