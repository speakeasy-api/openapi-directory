package openapisdk.models.shared;



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