package openapisdk.models.shared;



/**
 * DbSubnetGroupMessage
 * Represents the output of <a>DescribeDBSubnetGroups</a>.
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