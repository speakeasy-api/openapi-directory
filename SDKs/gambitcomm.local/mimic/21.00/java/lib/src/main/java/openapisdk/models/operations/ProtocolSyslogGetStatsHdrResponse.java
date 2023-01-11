package openapisdk.models.operations;



public class ProtocolSyslogGetStatsHdrResponse {
    public String contentType;
    public ProtocolSyslogGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSyslogGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSyslogGetStatsHdr200ApplicationJSONStrings;
    public ProtocolSyslogGetStatsHdrResponse withProtocolSyslogGetStatsHdr200ApplicationJsonStrings(String[] protocolSyslogGetStatsHdr200ApplicationJSONStrings) {
        this.protocolSyslogGetStatsHdr200ApplicationJSONStrings = protocolSyslogGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}