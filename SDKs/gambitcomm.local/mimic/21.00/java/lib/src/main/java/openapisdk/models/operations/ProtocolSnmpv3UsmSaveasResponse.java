package openapisdk.models.operations;



public class ProtocolSnmpv3UsmSaveasResponse {
    public String contentType;
    public ProtocolSnmpv3UsmSaveasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3UsmSaveasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3UsmSaveas200ApplicationJSONStrings;
    public ProtocolSnmpv3UsmSaveasResponse withProtocolSnmpv3UsmSaveas200ApplicationJsonStrings(String[] protocolSnmpv3UsmSaveas200ApplicationJSONStrings) {
        this.protocolSnmpv3UsmSaveas200ApplicationJSONStrings = protocolSnmpv3UsmSaveas200ApplicationJSONStrings;
        return this;
    }
}