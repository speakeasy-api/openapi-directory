package openapisdk.models.shared;



public class TrackListMessage {
    public TrackList[] maintenanceTracks;
    public TrackListMessage withMaintenanceTracks(TrackList[] maintenanceTracks) {
        this.maintenanceTracks = maintenanceTracks;
        return this;
    }
    public String marker;
    public TrackListMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}