package openapisdk.models.shared;



/**
 * DbClusterSnapshotMessage
 *  Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action. 
**/
public class DbClusterSnapshotMessage {
    public DbClusterSnapshotList[] dbClusterSnapshots;
    public DbClusterSnapshotMessage withDbClusterSnapshots(DbClusterSnapshotList[] dbClusterSnapshots) {
        this.dbClusterSnapshots = dbClusterSnapshots;
        return this;
    }
    public String marker;
    public DbClusterSnapshotMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}