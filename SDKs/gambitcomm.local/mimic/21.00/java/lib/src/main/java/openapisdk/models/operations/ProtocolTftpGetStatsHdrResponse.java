package openapisdk.models.operations;



public class ProtocolTftpGetStatsHdrResponse {
    public String contentType;
    public ProtocolTftpGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolTftpGetStatsHdr200ApplicationJSONStrings;
    public ProtocolTftpGetStatsHdrResponse withProtocolTftpGetStatsHdr200ApplicationJsonStrings(String[] protocolTftpGetStatsHdr200ApplicationJSONStrings) {
        this.protocolTftpGetStatsHdr200ApplicationJSONStrings = protocolTftpGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}