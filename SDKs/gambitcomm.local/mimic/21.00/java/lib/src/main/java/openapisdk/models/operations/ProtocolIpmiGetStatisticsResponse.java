package openapisdk.models.operations;



public class ProtocolIpmiGetStatisticsResponse {
    public String contentType;
    public ProtocolIpmiGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolIpmiGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolIpmiGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolIpmiGetStatisticsResponse withProtocolIpmiGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolIpmiGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolIpmiGetStatistics200ApplicationJSONInt32Integers = protocolIpmiGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}