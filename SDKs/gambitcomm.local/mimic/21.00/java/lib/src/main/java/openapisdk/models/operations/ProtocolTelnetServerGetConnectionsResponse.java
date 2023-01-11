package openapisdk.models.operations;



public class ProtocolTelnetServerGetConnectionsResponse {
    public String contentType;
    public ProtocolTelnetServerGetConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetServerGetConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolTelnetServerGetConnections200ApplicationJSONInt32Integers;
    public ProtocolTelnetServerGetConnectionsResponse withProtocolTelnetServerGetConnections200ApplicationJsonInt32Integers(Integer[] protocolTelnetServerGetConnections200ApplicationJSONInt32Integers) {
        this.protocolTelnetServerGetConnections200ApplicationJSONInt32Integers = protocolTelnetServerGetConnections200ApplicationJSONInt32Integers;
        return this;
    }
}