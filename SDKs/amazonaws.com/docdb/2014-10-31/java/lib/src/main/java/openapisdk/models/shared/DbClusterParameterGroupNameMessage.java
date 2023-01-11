package openapisdk.models.shared;



/**
 * DbClusterParameterGroupNameMessage
 * Contains the name of a cluster parameter group.
**/
public class DbClusterParameterGroupNameMessage {
    public String dbClusterParameterGroupName;
    public DbClusterParameterGroupNameMessage withDbClusterParameterGroupName(String dbClusterParameterGroupName) {
        this.dbClusterParameterGroupName = dbClusterParameterGroupName;
        return this;
    }
}