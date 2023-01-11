package openapisdk.models.operations;



public class ProtocolIpmiGetStatsHdrResponse {
    public String contentType;
    public ProtocolIpmiGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolIpmiGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolIpmiGetStatsHdr200ApplicationJSONStrings;
    public ProtocolIpmiGetStatsHdrResponse withProtocolIpmiGetStatsHdr200ApplicationJsonStrings(String[] protocolIpmiGetStatsHdr200ApplicationJSONStrings) {
        this.protocolIpmiGetStatsHdr200ApplicationJSONStrings = protocolIpmiGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}