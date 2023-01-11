package openapisdk.models.operations;



public class ProtocolTelnetConnectionSignalResponse {
    public String contentType;
    public ProtocolTelnetConnectionSignalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetConnectionSignalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolTelnetConnectionSignal200ApplicationJSONStrings;
    public ProtocolTelnetConnectionSignalResponse withProtocolTelnetConnectionSignal200ApplicationJsonStrings(String[] protocolTelnetConnectionSignal200ApplicationJSONStrings) {
        this.protocolTelnetConnectionSignal200ApplicationJSONStrings = protocolTelnetConnectionSignal200ApplicationJSONStrings;
        return this;
    }
}