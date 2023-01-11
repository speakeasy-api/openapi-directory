package openapisdk.models.shared;



/**
 * TrackList
 * Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release. 
**/
public class TrackList {
    public String databaseVersion;
    public TrackList withDatabaseVersion(String databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    public String maintenanceTrackName;
    public TrackList withMaintenanceTrackName(String maintenanceTrackName) {
        this.maintenanceTrackName = maintenanceTrackName;
        return this;
    }
    public EligibleTracksToUpdateList[] updateTargets;
    public TrackList withUpdateTargets(EligibleTracksToUpdateList[] updateTargets) {
        this.updateTargets = updateTargets;
        return this;
    }
}