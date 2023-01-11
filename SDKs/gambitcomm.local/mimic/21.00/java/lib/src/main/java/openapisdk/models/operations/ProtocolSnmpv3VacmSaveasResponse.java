package openapisdk.models.operations;



public class ProtocolSnmpv3VacmSaveasResponse {
    public String contentType;
    public ProtocolSnmpv3VacmSaveasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3VacmSaveasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3VacmSaveas200ApplicationJSONStrings;
    public ProtocolSnmpv3VacmSaveasResponse withProtocolSnmpv3VacmSaveas200ApplicationJsonStrings(String[] protocolSnmpv3VacmSaveas200ApplicationJSONStrings) {
        this.protocolSnmpv3VacmSaveas200ApplicationJSONStrings = protocolSnmpv3VacmSaveas200ApplicationJSONStrings;
        return this;
    }
}