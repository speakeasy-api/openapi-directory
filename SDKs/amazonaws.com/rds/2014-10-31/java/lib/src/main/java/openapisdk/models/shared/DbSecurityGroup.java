package openapisdk.models.shared;



/**
 * DbSecurityGroup
 * <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
**/
public class DbSecurityGroup {
    public String dbSecurityGroupArn;
    public DbSecurityGroup withDbSecurityGroupArn(String dbSecurityGroupArn) {
        this.dbSecurityGroupArn = dbSecurityGroupArn;
        return this;
    }
    public String dbSecurityGroupDescription;
    public DbSecurityGroup withDbSecurityGroupDescription(String dbSecurityGroupDescription) {
        this.dbSecurityGroupDescription = dbSecurityGroupDescription;
        return this;
    }
    public String dbSecurityGroupName;
    public DbSecurityGroup withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    public Ec2SecurityGroupList[] ec2SecurityGroups;
    public DbSecurityGroup withEc2SecurityGroups(Ec2SecurityGroupList[] ec2SecurityGroups) {
        this.ec2SecurityGroups = ec2SecurityGroups;
        return this;
    }
    public IpRangeList[] ipRanges;
    public DbSecurityGroup withIpRanges(IpRangeList[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    public String ownerId;
    public DbSecurityGroup withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public String vpcId;
    public DbSecurityGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}