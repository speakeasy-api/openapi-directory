package openapisdk.models.operations;



public class ProtocolSnmpv3VacmSaveResponse {
    public String contentType;
    public ProtocolSnmpv3VacmSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3VacmSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3VacmSave200ApplicationJSONStrings;
    public ProtocolSnmpv3VacmSaveResponse withProtocolSnmpv3VacmSave200ApplicationJsonStrings(String[] protocolSnmpv3VacmSave200ApplicationJSONStrings) {
        this.protocolSnmpv3VacmSave200ApplicationJSONStrings = protocolSnmpv3VacmSave200ApplicationJSONStrings;
        return this;
    }
}