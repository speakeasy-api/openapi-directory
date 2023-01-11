package openapisdk.models.shared;



/**
 * DbInstanceAutomatedBackupsReplicationList
 * Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.
**/
public class DbInstanceAutomatedBackupsReplicationList {
    public String dbInstanceAutomatedBackupsArn;
    public DbInstanceAutomatedBackupsReplicationList withDbInstanceAutomatedBackupsArn(String dbInstanceAutomatedBackupsArn) {
        this.dbInstanceAutomatedBackupsArn = dbInstanceAutomatedBackupsArn;
        return this;
    }
}