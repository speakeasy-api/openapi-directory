package openapisdk.models.shared;



public class ServiceUpdatesMessage {
    public String marker;
    public ServiceUpdatesMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ServiceUpdateList[] serviceUpdates;
    public ServiceUpdatesMessage withServiceUpdates(ServiceUpdateList[] serviceUpdates) {
        this.serviceUpdates = serviceUpdates;
        return this;
    }
}