package openapisdk.models.operations;



public class ProtocolSnmptcpGetStatisticsResponse {
    public String contentType;
    public ProtocolSnmptcpGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmptcpGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolSnmptcpGetStatisticsResponse withProtocolSnmptcpGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers = protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}