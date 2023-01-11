package openapisdk.models.operations;



public class ProtocolDhcpGetStatisticsResponse {
    public String contentType;
    public ProtocolDhcpGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolDhcpGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolDhcpGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolDhcpGetStatisticsResponse withProtocolDhcpGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolDhcpGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolDhcpGetStatistics200ApplicationJSONInt32Integers = protocolDhcpGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}