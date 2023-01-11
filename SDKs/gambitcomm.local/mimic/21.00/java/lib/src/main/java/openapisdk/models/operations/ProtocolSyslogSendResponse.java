package openapisdk.models.operations;



public class ProtocolSyslogSendResponse {
    public String contentType;
    public ProtocolSyslogSendResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSyslogSendResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String protocolSyslogSend200ApplicationJSONString;
    public ProtocolSyslogSendResponse withProtocolSyslogSend200ApplicationJsonString(String protocolSyslogSend200ApplicationJSONString) {
        this.protocolSyslogSend200ApplicationJSONString = protocolSyslogSend200ApplicationJSONString;
        return this;
    }
}