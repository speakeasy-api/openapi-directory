package openapisdk.models.shared;



/**
 * DbSubnetGroup
 * <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
**/
public class DbSubnetGroup {
    public String dbSubnetGroupArn;
    public DbSubnetGroup withDbSubnetGroupArn(String dbSubnetGroupArn) {
        this.dbSubnetGroupArn = dbSubnetGroupArn;
        return this;
    }
    public String dbSubnetGroupDescription;
    public DbSubnetGroup withDbSubnetGroupDescription(String dbSubnetGroupDescription) {
        this.dbSubnetGroupDescription = dbSubnetGroupDescription;
        return this;
    }
    public String dbSubnetGroupName;
    public DbSubnetGroup withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    public String subnetGroupStatus;
    public DbSubnetGroup withSubnetGroupStatus(String subnetGroupStatus) {
        this.subnetGroupStatus = subnetGroupStatus;
        return this;
    }
    public SubnetList[] subnets;
    public DbSubnetGroup withSubnets(SubnetList[] subnets) {
        this.subnets = subnets;
        return this;
    }
    public String vpcId;
    public DbSubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}