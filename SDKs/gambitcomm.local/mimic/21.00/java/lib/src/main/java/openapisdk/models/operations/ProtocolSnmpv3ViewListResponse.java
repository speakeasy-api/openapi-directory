package openapisdk.models.operations;



public class ProtocolSnmpv3ViewListResponse {
    public String contentType;
    public ProtocolSnmpv3ViewListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3ViewListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3ViewList200ApplicationJSONStrings;
    public ProtocolSnmpv3ViewListResponse withProtocolSnmpv3ViewList200ApplicationJsonStrings(String[] protocolSnmpv3ViewList200ApplicationJSONStrings) {
        this.protocolSnmpv3ViewList200ApplicationJSONStrings = protocolSnmpv3ViewList200ApplicationJSONStrings;
        return this;
    }
}