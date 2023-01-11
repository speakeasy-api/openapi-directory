package openapisdk.models.operations;



public class ProtocolWebPortExistsResponse {
    public String contentType;
    public ProtocolWebPortExistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolWebPortExistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolWebPortExists200ApplicationJSONStrings;
    public ProtocolWebPortExistsResponse withProtocolWebPortExists200ApplicationJsonStrings(String[] protocolWebPortExists200ApplicationJSONStrings) {
        this.protocolWebPortExists200ApplicationJSONStrings = protocolWebPortExists200ApplicationJSONStrings;
        return this;
    }
}