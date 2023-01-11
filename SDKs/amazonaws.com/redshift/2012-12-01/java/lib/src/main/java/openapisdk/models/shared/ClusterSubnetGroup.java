package openapisdk.models.shared;



/**
 * ClusterSubnetGroup
 * Describes a subnet group.
**/
public class ClusterSubnetGroup {
    public String clusterSubnetGroupName;
    public ClusterSubnetGroup withClusterSubnetGroupName(String clusterSubnetGroupName) {
        this.clusterSubnetGroupName = clusterSubnetGroupName;
        return this;
    }
    public String description;
    public ClusterSubnetGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    public String subnetGroupStatus;
    public ClusterSubnetGroup withSubnetGroupStatus(String subnetGroupStatus) {
        this.subnetGroupStatus = subnetGroupStatus;
        return this;
    }
    public SubnetList[] subnets;
    public ClusterSubnetGroup withSubnets(SubnetList[] subnets) {
        this.subnets = subnets;
        return this;
    }
    public TagList[] tags;
    public ClusterSubnetGroup withTags(TagList[] tags) {
        this.tags = tags;
        return this;
    }
    public String vpcId;
    public ClusterSubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}