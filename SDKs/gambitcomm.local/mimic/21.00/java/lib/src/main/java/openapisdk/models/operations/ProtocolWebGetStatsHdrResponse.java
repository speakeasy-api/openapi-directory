package openapisdk.models.operations;



public class ProtocolWebGetStatsHdrResponse {
    public String contentType;
    public ProtocolWebGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolWebGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolWebGetStatsHdr200ApplicationJSONStrings;
    public ProtocolWebGetStatsHdrResponse withProtocolWebGetStatsHdr200ApplicationJsonStrings(String[] protocolWebGetStatsHdr200ApplicationJSONStrings) {
        this.protocolWebGetStatsHdr200ApplicationJSONStrings = protocolWebGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}