package openapisdk.models.shared;



public class DbSubnetGroups {
    public String dbSubnetGroupDescription;
    public DbSubnetGroups withDbSubnetGroupDescription(String dbSubnetGroupDescription) {
        this.dbSubnetGroupDescription = dbSubnetGroupDescription;
        return this;
    }
    public String dbSubnetGroupName;
    public DbSubnetGroups withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    public String subnetGroupStatus;
    public DbSubnetGroups withSubnetGroupStatus(String subnetGroupStatus) {
        this.subnetGroupStatus = subnetGroupStatus;
        return this;
    }
    public SubnetList[] subnets;
    public DbSubnetGroups withSubnets(SubnetList[] subnets) {
        this.subnets = subnets;
        return this;
    }
    public String vpcId;
    public DbSubnetGroups withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}