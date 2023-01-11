package openapisdk.models.shared;



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