package openapisdk.models.operations;



public class ProtocolCoapGetStatsHdrResponse {
    public String contentType;
    public ProtocolCoapGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolCoapGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolCoapGetStatsHdr200ApplicationJSONStrings;
    public ProtocolCoapGetStatsHdrResponse withProtocolCoapGetStatsHdr200ApplicationJsonStrings(String[] protocolCoapGetStatsHdr200ApplicationJSONStrings) {
        this.protocolCoapGetStatsHdr200ApplicationJSONStrings = protocolCoapGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}