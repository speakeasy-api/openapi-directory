package openapisdk.models.shared;



/**
 * DbClusterParameterGroup
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
**/
public class DbClusterParameterGroup {
    public String dbClusterParameterGroupArn;
    public DbClusterParameterGroup withDbClusterParameterGroupArn(String dbClusterParameterGroupArn) {
        this.dbClusterParameterGroupArn = dbClusterParameterGroupArn;
        return this;
    }
    public String dbClusterParameterGroupName;
    public DbClusterParameterGroup withDbClusterParameterGroupName(String dbClusterParameterGroupName) {
        this.dbClusterParameterGroupName = dbClusterParameterGroupName;
        return this;
    }
    public String dbParameterGroupFamily;
    public DbClusterParameterGroup withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    public String description;
    public DbClusterParameterGroup withDescription(String description) {
        this.description = description;
        return this;
    }
}