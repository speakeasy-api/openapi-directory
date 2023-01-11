package openapisdk.models.operations;



public class ProtocolSflowGetStatsHdrResponse {
    public String contentType;
    public ProtocolSflowGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSflowGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSflowGetStatsHdr200ApplicationJSONStrings;
    public ProtocolSflowGetStatsHdrResponse withProtocolSflowGetStatsHdr200ApplicationJsonStrings(String[] protocolSflowGetStatsHdr200ApplicationJSONStrings) {
        this.protocolSflowGetStatsHdr200ApplicationJSONStrings = protocolSflowGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}