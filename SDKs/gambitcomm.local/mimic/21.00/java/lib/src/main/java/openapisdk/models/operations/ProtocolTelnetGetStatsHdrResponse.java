package openapisdk.models.operations;



public class ProtocolTelnetGetStatsHdrResponse {
    public String contentType;
    public ProtocolTelnetGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolTelnetGetStatsHdr200ApplicationJSONStrings;
    public ProtocolTelnetGetStatsHdrResponse withProtocolTelnetGetStatsHdr200ApplicationJsonStrings(String[] protocolTelnetGetStatsHdr200ApplicationJSONStrings) {
        this.protocolTelnetGetStatsHdr200ApplicationJSONStrings = protocolTelnetGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}