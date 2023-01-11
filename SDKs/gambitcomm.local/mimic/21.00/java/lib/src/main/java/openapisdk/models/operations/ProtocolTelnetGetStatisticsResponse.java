package openapisdk.models.operations;



public class ProtocolTelnetGetStatisticsResponse {
    public String contentType;
    public ProtocolTelnetGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolTelnetGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolTelnetGetStatisticsResponse withProtocolTelnetGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolTelnetGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolTelnetGetStatistics200ApplicationJSONInt32Integers = protocolTelnetGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}