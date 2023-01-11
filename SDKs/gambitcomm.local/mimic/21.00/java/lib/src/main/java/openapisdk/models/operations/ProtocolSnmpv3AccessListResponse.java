package openapisdk.models.operations;



public class ProtocolSnmpv3AccessListResponse {
    public String contentType;
    public ProtocolSnmpv3AccessListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3AccessListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3AccessList200ApplicationJSONStrings;
    public ProtocolSnmpv3AccessListResponse withProtocolSnmpv3AccessList200ApplicationJsonStrings(String[] protocolSnmpv3AccessList200ApplicationJSONStrings) {
        this.protocolSnmpv3AccessList200ApplicationJSONStrings = protocolSnmpv3AccessList200ApplicationJSONStrings;
        return this;
    }
}