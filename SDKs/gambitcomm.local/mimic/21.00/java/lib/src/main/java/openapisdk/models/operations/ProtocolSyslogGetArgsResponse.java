package openapisdk.models.operations;



public class ProtocolSyslogGetArgsResponse {
    public String contentType;
    public ProtocolSyslogGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSyslogGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolSyslogGetArgs200ApplicationJSONObject;
    public ProtocolSyslogGetArgsResponse withProtocolSyslogGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolSyslogGetArgs200ApplicationJSONObject) {
        this.protocolSyslogGetArgs200ApplicationJSONObject = protocolSyslogGetArgs200ApplicationJSONObject;
        return this;
    }
}