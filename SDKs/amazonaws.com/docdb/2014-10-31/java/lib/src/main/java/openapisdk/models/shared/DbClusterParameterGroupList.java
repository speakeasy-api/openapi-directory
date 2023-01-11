package openapisdk.models.shared;



/**
 * DbClusterParameterGroupList
 * Detailed information about a cluster parameter group. 
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