package openapisdk.models.shared;



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