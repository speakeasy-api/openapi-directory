package openapisdk.models.shared;



/**
 * DbSecurityGroupMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action. 
**/
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