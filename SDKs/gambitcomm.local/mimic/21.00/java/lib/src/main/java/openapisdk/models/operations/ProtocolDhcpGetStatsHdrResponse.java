package openapisdk.models.operations;



public class ProtocolDhcpGetStatsHdrResponse {
    public String contentType;
    public ProtocolDhcpGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolDhcpGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolDhcpGetStatsHdr200ApplicationJSONStrings;
    public ProtocolDhcpGetStatsHdrResponse withProtocolDhcpGetStatsHdr200ApplicationJsonStrings(String[] protocolDhcpGetStatsHdr200ApplicationJSONStrings) {
        this.protocolDhcpGetStatsHdr200ApplicationJSONStrings = protocolDhcpGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}