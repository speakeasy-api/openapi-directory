package openapisdk.models.shared;



public class DbSecurityGroupMessage {
    public DbSecurityGroups[] dbSecurityGroups;
    public DbSecurityGroupMessage withDbSecurityGroups(DbSecurityGroups[] dbSecurityGroups) {
        this.dbSecurityGroups = dbSecurityGroups;
        return this;
    }
    public String marker;
    public DbSecurityGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}