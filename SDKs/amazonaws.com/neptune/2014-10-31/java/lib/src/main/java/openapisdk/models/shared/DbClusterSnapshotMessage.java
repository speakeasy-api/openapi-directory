package openapisdk.models.shared;



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