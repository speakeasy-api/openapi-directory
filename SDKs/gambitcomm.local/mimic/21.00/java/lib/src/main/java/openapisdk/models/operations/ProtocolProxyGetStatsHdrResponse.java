package openapisdk.models.operations;



public class ProtocolProxyGetStatsHdrResponse {
    public String contentType;
    public ProtocolProxyGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolProxyGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolProxyGetStatsHdr200ApplicationJSONStrings;
    public ProtocolProxyGetStatsHdrResponse withProtocolProxyGetStatsHdr200ApplicationJsonStrings(String[] protocolProxyGetStatsHdr200ApplicationJSONStrings) {
        this.protocolProxyGetStatsHdr200ApplicationJSONStrings = protocolProxyGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}