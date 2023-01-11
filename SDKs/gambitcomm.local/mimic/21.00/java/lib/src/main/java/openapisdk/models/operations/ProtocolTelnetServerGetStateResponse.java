package openapisdk.models.operations;



public class ProtocolTelnetServerGetStateResponse {
    public String contentType;
    public ProtocolTelnetServerGetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetServerGetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolTelnetServerGetState200ApplicationJSONInt32Integers;
    public ProtocolTelnetServerGetStateResponse withProtocolTelnetServerGetState200ApplicationJsonInt32Integers(Integer[] protocolTelnetServerGetState200ApplicationJSONInt32Integers) {
        this.protocolTelnetServerGetState200ApplicationJSONInt32Integers = protocolTelnetServerGetState200ApplicationJSONInt32Integers;
        return this;
    }
}