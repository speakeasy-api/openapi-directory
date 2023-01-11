package openapisdk.models.shared;



/**
 * ClusterSecurityGroups
 * Describes a security group.
**/
public class ClusterSecurityGroups {
    public String clusterSecurityGroupName;
    public ClusterSecurityGroups withClusterSecurityGroupName(String clusterSecurityGroupName) {
        this.clusterSecurityGroupName = clusterSecurityGroupName;
        return this;
    }
    public String description;
    public ClusterSecurityGroups withDescription(String description) {
        this.description = description;
        return this;
    }
    public Ec2SecurityGroupList[] ec2SecurityGroups;
    public ClusterSecurityGroups withEc2SecurityGroups(Ec2SecurityGroupList[] ec2SecurityGroups) {
        this.ec2SecurityGroups = ec2SecurityGroups;
        return this;
    }
    public IpRangeList[] ipRanges;
    public ClusterSecurityGroups withIpRanges(IpRangeList[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    public TagList[] tags;
    public ClusterSecurityGroups withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
}