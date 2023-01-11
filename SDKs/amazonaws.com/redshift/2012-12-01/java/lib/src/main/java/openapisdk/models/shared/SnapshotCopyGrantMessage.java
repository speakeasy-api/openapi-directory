package openapisdk.models.shared;



/**
 * SnapshotCopyGrantMessage
 * <p/>
**/
public class SnapshotCopyGrantMessage {
    public String marker;
    public SnapshotCopyGrantMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public SnapshotCopyGrantList[] snapshotCopyGrants;
    public SnapshotCopyGrantMessage withSnapshotCopyGrants(SnapshotCopyGrantList[] snapshotCopyGrants) {
        this.snapshotCopyGrants = snapshotCopyGrants;
        return this;
    }
}