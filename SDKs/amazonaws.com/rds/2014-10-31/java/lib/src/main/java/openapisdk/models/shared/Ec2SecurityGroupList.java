package openapisdk.models.shared;



/**
 * Ec2SecurityGroupList
 * <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul>
**/
public class Ec2SecurityGroupList {
    public String ec2SecurityGroupId;
    public Ec2SecurityGroupList withEc2SecurityGroupId(String ec2SecurityGroupId) {
        this.ec2SecurityGroupId = ec2SecurityGroupId;
        return this;
    }
    public String ec2SecurityGroupName;
    public Ec2SecurityGroupList withEc2SecurityGroupName(String ec2SecurityGroupName) {
        this.ec2SecurityGroupName = ec2SecurityGroupName;
        return this;
    }
    public String ec2SecurityGroupOwnerId;
    public Ec2SecurityGroupList withEc2SecurityGroupOwnerId(String ec2SecurityGroupOwnerId) {
        this.ec2SecurityGroupOwnerId = ec2SecurityGroupOwnerId;
        return this;
    }
    public String status;
    public Ec2SecurityGroupList withStatus(String status) {
        this.status = status;
        return this;
    }
}