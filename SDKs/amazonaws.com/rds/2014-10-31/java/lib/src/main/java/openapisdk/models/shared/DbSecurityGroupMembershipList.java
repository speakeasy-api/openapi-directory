package openapisdk.models.shared;



/**
 * DbSecurityGroupMembershipList
 * <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul>
**/
public class DbSecurityGroupMembershipList {
    public String dbSecurityGroupName;
    public DbSecurityGroupMembershipList withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    public String status;
    public DbSecurityGroupMembershipList withStatus(String status) {
        this.status = status;
        return this;
    }
}