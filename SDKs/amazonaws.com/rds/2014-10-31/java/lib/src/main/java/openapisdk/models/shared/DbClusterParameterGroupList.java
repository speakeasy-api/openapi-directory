package openapisdk.models.shared;



/**
 * DbClusterParameterGroupList
 * <p>Contains the details of an Amazon RDS DB cluster parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action. </p>
**/
public class DbClusterParameterGroupList {
    public String dbClusterParameterGroupArn;
    public DbClusterParameterGroupList withDbClusterParameterGroupArn(String dbClusterParameterGroupArn) {
        this.dbClusterParameterGroupArn = dbClusterParameterGroupArn;
        return this;
    }
    public String dbClusterParameterGroupName;
    public DbClusterParameterGroupList withDbClusterParameterGroupName(String dbClusterParameterGroupName) {
        this.dbClusterParameterGroupName = dbClusterParameterGroupName;
        return this;
    }
    public String dbParameterGroupFamily;
    public DbClusterParameterGroupList withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    public String description;
    public DbClusterParameterGroupList withDescription(String description) {
        this.description = description;
        return this;
    }
}