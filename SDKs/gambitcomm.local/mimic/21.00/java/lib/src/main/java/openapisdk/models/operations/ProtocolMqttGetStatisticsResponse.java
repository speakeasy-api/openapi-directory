package openapisdk.models.operations;



public class ProtocolMqttGetStatisticsResponse {
    public String contentType;
    public ProtocolMqttGetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttGetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttGetStatistics200ApplicationJSONInt32Integers;
    public ProtocolMqttGetStatisticsResponse withProtocolMqttGetStatistics200ApplicationJsonInt32Integers(Integer[] protocolMqttGetStatistics200ApplicationJSONInt32Integers) {
        this.protocolMqttGetStatistics200ApplicationJSONInt32Integers = protocolMqttGetStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}