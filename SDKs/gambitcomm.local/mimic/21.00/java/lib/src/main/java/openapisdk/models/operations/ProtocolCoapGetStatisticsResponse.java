package openapisdk.models.operations;



public class ProtocolCoapGetStatisticsResponse {
    public String contentType;
    public ProtocolCoapGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolCoapGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolCoapGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolCoapGetStatisticsResponse withProtocolCoapGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolCoapGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolCoapGetStatistics200ApplicationJSONInt32Integers = protocolCoapGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}