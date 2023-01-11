package openapisdk.models.shared;



/**
 * DbSnapshotMessage
 *  Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. 
**/
public class DbSnapshotMessage {
    public DbSnapshotList[] dbSnapshots;
    public DbSnapshotMessage withDbSnapshots(DbSnapshotList[] dbSnapshots) {
        this.dbSnapshots = dbSnapshots;
        return this;
    }
    public String marker;
    public DbSnapshotMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}