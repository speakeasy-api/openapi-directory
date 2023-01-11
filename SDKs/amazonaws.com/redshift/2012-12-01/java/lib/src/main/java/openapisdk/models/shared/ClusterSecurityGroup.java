package openapisdk.models.shared;



/**
 * ClusterSecurityGroup
 * Describes a security group.
**/
public class ClusterSecurityGroup {
    public String clusterSecurityGroupName;
    public ClusterSecurityGroup withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    public String description;
    public ClusterSecurityGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    public Ec2SecurityGroupList[] ec2SecurityGroups;
    public ClusterSecurityGroup withEc2SecurityGroups(Ec2SecurityGroupList[] ec2SecurityGroups) {
        this.ec2SecurityGroups = ec2SecurityGroups;
        return this;
    }
    public IpRangeList[] ipRanges;
    public ClusterSecurityGroup withIpRanges(IpRangeList[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    public TagList[] tags;
    public ClusterSecurityGroup withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}