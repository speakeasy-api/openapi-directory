package openapisdk.models.operations;



public class ProtocolTelnetConnectionLogonResponse {
    public String contentType;
    public ProtocolTelnetConnectionLogonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetConnectionLogonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolTelnetConnectionLogon200ApplicationJSONStrings;
    public ProtocolTelnetConnectionLogonResponse withProtocolTelnetConnectionLogon200ApplicationJsonStrings(String[] protocolTelnetConnectionLogon200ApplicationJSONStrings) {
        this.protocolTelnetConnectionLogon200ApplicationJSONStrings = protocolTelnetConnectionLogon200ApplicationJSONStrings;
        return this;
    }
}