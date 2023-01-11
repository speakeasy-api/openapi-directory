package openapisdk.models.operations;



public class ProtocolSyslogGetStatisticsResponse {
    public String contentType;
    public ProtocolSyslogGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSyslogGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolSyslogGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolSyslogGetStatisticsResponse withProtocolSyslogGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolSyslogGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolSyslogGetStatistics200ApplicationJSONInt32Integers = protocolSyslogGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}