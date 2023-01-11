package openapisdk.models.shared;



public class CustomAvailabilityZoneMessage {
    public CustomAvailabilityZoneList[] customAvailabilityZones;
    public CustomAvailabilityZoneMessage withCustomAvailabilityZones(CustomAvailabilityZoneList[] customAvailabilityZones) {
        this.customAvailabilityZones = customAvailabilityZones;
        return this;
    }
    public String marker;
    public CustomAvailabilityZoneMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}