package openapisdk.models.shared;



/**
 * DbSubnetGroupMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. 
**/
public class DbSubnetGroupMessage {
    public DbSubnetGroups[] dbSubnetGroups;
    public DbSubnetGroupMessage withDbSubnetGroups(DbSubnetGroups[] dbSubnetGroups) {
        this.dbSubnetGroups = dbSubnetGroups;
        return this;
    }
    public String marker;
    public DbSubnetGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}