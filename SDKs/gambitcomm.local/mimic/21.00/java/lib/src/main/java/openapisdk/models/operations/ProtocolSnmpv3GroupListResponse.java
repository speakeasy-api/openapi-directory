package openapisdk.models.operations;



public class ProtocolSnmpv3GroupListResponse {
    public String contentType;
    public ProtocolSnmpv3GroupListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3GroupListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3GroupList200ApplicationJSONStrings;
    public ProtocolSnmpv3GroupListResponse withProtocolSnmpv3GroupList200ApplicationJsonStrings(String[] protocolSnmpv3GroupList200ApplicationJSONStrings) {
        this.protocolSnmpv3GroupList200ApplicationJSONStrings = protocolSnmpv3GroupList200ApplicationJSONStrings;
        return this;
    }
}