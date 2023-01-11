package openapisdk.models.shared;



/**
 * DbInstanceAutomatedBackupMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action. 
**/
public class DbInstanceAutomatedBackupMessage {
    public DbInstanceAutomatedBackupList[] dbInstanceAutomatedBackups;
    public DbInstanceAutomatedBackupMessage withDbInstanceAutomatedBackups(DbInstanceAutomatedBackupList[] dbInstanceAutomatedBackups) {
        this.dbInstanceAutomatedBackups = dbInstanceAutomatedBackups;
        return this;
    }
    public String marker;
    public DbInstanceAutomatedBackupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}