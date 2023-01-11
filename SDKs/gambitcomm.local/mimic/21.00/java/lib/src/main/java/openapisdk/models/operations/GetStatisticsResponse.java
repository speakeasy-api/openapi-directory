package openapisdk.models.operations;



public class GetStatisticsResponse {
    public String contentType;
    public GetStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] getStatistics200ApplicationJSONInt32Integers;
    public GetStatisticsResponse withGetStatistics200ApplicationJsonInt32Integers(Integer[] getStatistics200ApplicationJSONInt32Integers) {
        this.getStatistics200ApplicationJSONInt32Integers = getStatistics200ApplicationJSONInt32Integers;
        return this;
    }
}