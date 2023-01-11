package openapisdk.models.operations;



public class ProtocolSnmpv3UsmSaveResponse {
    public String contentType;
    public ProtocolSnmpv3UsmSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3UsmSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3UsmSave200ApplicationJSONStrings;
    public ProtocolSnmpv3UsmSaveResponse withProtocolSnmpv3UsmSave200ApplicationJsonStrings(String[] protocolSnmpv3UsmSave200ApplicationJSONStrings) {
        this.protocolSnmpv3UsmSave200ApplicationJSONStrings = protocolSnmpv3UsmSave200ApplicationJSONStrings;
        return this;
    }
}