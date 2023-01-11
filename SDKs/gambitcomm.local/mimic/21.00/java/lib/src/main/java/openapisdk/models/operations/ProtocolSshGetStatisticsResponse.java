package openapisdk.models.operations;



public class ProtocolSshGetStatisticsResponse {
    public String contentType;
    public ProtocolSshGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSshGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolSshGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolSshGetStatisticsResponse withProtocolSshGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolSshGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolSshGetStatistics200ApplicationJSONInt32Integers = protocolSshGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}