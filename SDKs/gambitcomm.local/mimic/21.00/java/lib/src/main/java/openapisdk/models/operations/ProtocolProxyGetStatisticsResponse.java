package openapisdk.models.operations;



public class ProtocolProxyGetStatisticsResponse {
    public String contentType;
    public ProtocolProxyGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolProxyGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolProxyGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolProxyGetStatisticsResponse withProtocolProxyGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolProxyGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolProxyGetStatistics200ApplicationJSONInt32Integers = protocolProxyGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}