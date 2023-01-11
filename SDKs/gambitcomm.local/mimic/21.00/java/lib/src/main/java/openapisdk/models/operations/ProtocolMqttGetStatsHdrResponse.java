package openapisdk.models.operations;



public class ProtocolMqttGetStatsHdrResponse {
    public String contentType;
    public ProtocolMqttGetStatsHdrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttGetStatsHdrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttGetStatsHdr200ApplicationJSONStrings;
    public ProtocolMqttGetStatsHdrResponse withProtocolMqttGetStatsHdr200ApplicationJsonStrings(String[] protocolMqttGetStatsHdr200ApplicationJSONStrings) {
        this.protocolMqttGetStatsHdr200ApplicationJSONStrings = protocolMqttGetStatsHdr200ApplicationJSONStrings;
        return this;
    }
}