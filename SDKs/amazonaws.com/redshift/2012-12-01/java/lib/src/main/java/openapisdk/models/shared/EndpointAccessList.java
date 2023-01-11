package openapisdk.models.shared;



public class EndpointAccessList {
    public EndpointAccess[] endpointAccessList;
    public EndpointAccessList withEndpointAccessList(EndpointAccess[] endpointAccessList) {
        this.endpointAccessList = endpointAccessList;
        return this;
    }
    public String marker;
    public EndpointAccessList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}