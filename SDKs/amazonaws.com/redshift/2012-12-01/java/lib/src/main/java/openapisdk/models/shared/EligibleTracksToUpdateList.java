package openapisdk.models.shared;



/**
 * EligibleTracksToUpdateList
 * A maintenance track that you can switch the current track to.
**/
public class EligibleTracksToUpdateList {
    public String databaseVersion;
    public EligibleTracksToUpdateList withDatabaseVersion(String databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    public String maintenanceTrackName;
    public EligibleTracksToUpdateList withMaintenanceTrackName(String maintenanceTrackName) {
        this.maintenanceTrackName = maintenanceTrackName;
        return this;
    }
    public SupportedOperationList[] supportedOperations;
    public EligibleTracksToUpdateList withSupportedOperations(SupportedOperationList[] supportedOperations) {
        this.supportedOperations = supportedOperations;
        return this;
    }
}