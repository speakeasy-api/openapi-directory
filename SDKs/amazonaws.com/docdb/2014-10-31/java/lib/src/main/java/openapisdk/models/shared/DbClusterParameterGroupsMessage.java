package openapisdk.models.shared;



/**
 * DbClusterParameterGroupsMessage
 * Represents the output of <a>DBClusterParameterGroups</a>.
**/
public class DbClusterParameterGroupsMessage {
    public DbClusterParameterGroupList[] dbClusterParameterGroups;
    public DbClusterParameterGroupsMessage withDbClusterParameterGroups(DbClusterParameterGroupList[] dbClusterParameterGroups) {
        this.dbClusterParameterGroups = dbClusterParameterGroups;
        return this;
    }
    public String marker;
    public DbClusterParameterGroupsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}