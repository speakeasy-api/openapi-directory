package openapisdk.models.shared;



/**
 * VpcSecurityGroupMembershipList
 * This data type is used as a response element for queries on VPC security group membership.
**/
public class VpcSecurityGroupMembershipList {
    public String status;
    public VpcSecurityGroupMembershipList withStatus(String status) {
        this.status = status;
        return this;
    }
    public String vpcSecurityGroupId;
    public VpcSecurityGroupMembershipList withVpcSecurityGroupId(String vpcSecurityGroupId) {
        this.vpcSecurityGroupId = vpcSecurityGroupId;
        return this;
    }
}