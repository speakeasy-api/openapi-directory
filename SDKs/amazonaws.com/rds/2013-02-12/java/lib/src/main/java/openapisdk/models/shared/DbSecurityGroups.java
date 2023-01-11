package openapisdk.models.shared;



public class DbSecurityGroups {
    public String dbSecurityGroupDescription;
    public DbSecurityGroups withDbSecurityGroupDescription(String dbSecurityGroupDescription) {
        this.dbSecurityGroupDescription = dbSecurityGroupDescription;
        return this;
    }
    public String dbSecurityGroupName;
    public DbSecurityGroups withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    public Ec2SecurityGroupList[] ec2SecurityGroups;
    public DbSecurityGroups withEc2SecurityGroups(Ec2SecurityGroupList[] ec2SecurityGroups) {
        this.ec2SecurityGroups = ec2SecurityGroups;
        return this;
    }
    public IpRangeList[] ipRanges;
    public DbSecurityGroups withIpRanges(IpRangeList[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    public String ownerId;
    public DbSecurityGroups withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public String vpcId;
    public DbSecurityGroups withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}