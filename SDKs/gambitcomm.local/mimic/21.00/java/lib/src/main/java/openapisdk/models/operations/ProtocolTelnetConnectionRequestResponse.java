package openapisdk.models.operations;



public class ProtocolTelnetConnectionRequestResponse {
    public String contentType;
    public ProtocolTelnetConnectionRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetConnectionRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolTelnetConnectionRequest200ApplicationJSONStrings;
    public ProtocolTelnetConnectionRequestResponse withProtocolTelnetConnectionRequest200ApplicationJsonStrings(String[] protocolTelnetConnectionRequest200ApplicationJSONStrings) {
        this.protocolTelnetConnectionRequest200ApplicationJSONStrings = protocolTelnetConnectionRequest200ApplicationJSONStrings;
        return this;
    }
}