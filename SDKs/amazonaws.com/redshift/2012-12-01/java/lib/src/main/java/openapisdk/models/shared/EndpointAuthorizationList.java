package openapisdk.models.shared;



public class EndpointAuthorizationList {
    public EndpointAuthorization[] endpointAuthorizationList;
    public EndpointAuthorizationList withEndpointAuthorizationList(EndpointAuthorization[] endpointAuthorizationList) {
        this.endpointAuthorizationList = endpointAuthorizationList;
        return this;
    }
    public String marker;
    public EndpointAuthorizationList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}