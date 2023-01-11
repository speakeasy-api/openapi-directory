package openapisdk.models.shared;



/**
 * DbClusterOptionGroupMemberships
 * Contains status information for a DB cluster option group.
**/
public class DbClusterOptionGroupMemberships {
    public String dbClusterOptionGroupName;
    public DbClusterOptionGroupMemberships withDbClusterOptionGroupName(String dbClusterOptionGroupName) {
        this.dbClusterOptionGroupName = dbClusterOptionGroupName;
        return this;
    }
    public String status;
    public DbClusterOptionGroupMemberships withStatus(String status) {
        this.status = status;
        return this;
    }
}