package openapisdk.models.operations;



public class ProtocolSnmptcpGetStatsHdrResponse {
    public String contentType;
    public ProtocolSnmptcpGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmptcpGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmptcpGetStatsHdr200ApplicationJSONStrings;
    public ProtocolSnmptcpGetStatsHdrResponse withProtocolSnmptcpGetStatsHdr200ApplicationJsonStrings(String[] protocolSnmptcpGetStatsHdr200ApplicationJSONStrings) {
        this.protocolSnmptcpGetStatsHdr200ApplicationJSONStrings = protocolSnmptcpGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}