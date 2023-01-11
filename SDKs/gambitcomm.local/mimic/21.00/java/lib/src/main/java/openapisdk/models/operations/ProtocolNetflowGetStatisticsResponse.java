package openapisdk.models.operations;



public class ProtocolNetflowGetStatisticsResponse {
    public String contentType;
    public ProtocolNetflowGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolNetflowGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolNetflowGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolNetflowGetStatisticsResponse withProtocolNetflowGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolNetflowGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolNetflowGetStatistics200ApplicationJSONInt32Integers = protocolNetflowGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}