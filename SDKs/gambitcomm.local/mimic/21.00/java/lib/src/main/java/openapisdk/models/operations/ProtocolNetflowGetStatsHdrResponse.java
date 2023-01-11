package openapisdk.models.operations;



public class ProtocolNetflowGetStatsHdrResponse {
    public String contentType;
    public ProtocolNetflowGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolNetflowGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolNetflowGetStatsHdr200ApplicationJSONStrings;
    public ProtocolNetflowGetStatsHdrResponse withProtocolNetflowGetStatsHdr200ApplicationJsonStrings(String[] protocolNetflowGetStatsHdr200ApplicationJSONStrings) {
        this.protocolNetflowGetStatsHdr200ApplicationJSONStrings = protocolNetflowGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}