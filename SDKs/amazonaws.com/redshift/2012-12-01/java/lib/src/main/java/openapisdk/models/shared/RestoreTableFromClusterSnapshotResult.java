package openapisdk.models.shared;



public class RestoreTableFromClusterSnapshotResult {
    public TableRestoreStatus tableRestoreStatus;
    public RestoreTableFromClusterSnapshotResult withTableRestoreStatus(TableRestoreStatus tableRestoreStatus) {
        this.tableRestoreStatus = tableRestoreStatus;
        return this;
    }
}