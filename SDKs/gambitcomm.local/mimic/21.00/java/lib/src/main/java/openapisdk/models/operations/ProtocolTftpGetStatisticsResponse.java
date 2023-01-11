package openapisdk.models.operations;



public class ProtocolTftpGetStatisticsResponse {
    public String contentType;
    public ProtocolTftpGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolTftpGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolTftpGetStatisticsResponse withProtocolTftpGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolTftpGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolTftpGetStatistics200ApplicationJSONInt32Integers = protocolTftpGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}