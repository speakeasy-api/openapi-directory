package openapisdk.models.operations;



public class ProtocolWebGetStatisticsResponse {
    public String contentType;
    public ProtocolWebGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolWebGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolWebGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolWebGetStatisticsResponse withProtocolWebGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolWebGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolWebGetStatistics200ApplicationJSONInt32Integers = protocolWebGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}