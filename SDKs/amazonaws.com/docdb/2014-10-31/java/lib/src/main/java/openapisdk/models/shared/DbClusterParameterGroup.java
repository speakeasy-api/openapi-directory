package openapisdk.models.shared;



/**
 * DbClusterParameterGroup
 * Detailed information about a cluster parameter group. 
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