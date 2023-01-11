package openapisdk.models.operations;



public class GetStatisticsIdResponse {
    public String contentType;
    public GetStatisticsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetStatisticsId400ApplicationJson getStatisticsId400ApplicationJSONObject;
    public GetStatisticsIdResponse withGetStatisticsId400ApplicationJsonObject(GetStatisticsId400ApplicationJson getStatisticsId400ApplicationJSONObject) {
        this.getStatisticsId400ApplicationJSONObject = getStatisticsId400ApplicationJSONObject;
        return this;
    }
    public GetStatisticsId401ApplicationJson getStatisticsId401ApplicationJSONObject;
    public GetStatisticsIdResponse withGetStatisticsId401ApplicationJsonObject(GetStatisticsId401ApplicationJson getStatisticsId401ApplicationJSONObject) {
        this.getStatisticsId401ApplicationJSONObject = getStatisticsId401ApplicationJSONObject;
        return this;
    }
    public GetStatisticsId500ApplicationJson getStatisticsId500ApplicationJSONObject;
    public GetStatisticsIdResponse withGetStatisticsId500ApplicationJsonObject(GetStatisticsId500ApplicationJson getStatisticsId500ApplicationJSONObject) {
        this.getStatisticsId500ApplicationJSONObject = getStatisticsId500ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.GetStatisticsResponse getStatisticsResponse;
    public GetStatisticsIdResponse withGetStatisticsResponse(openapisdk.models.shared.GetStatisticsResponse getStatisticsResponse) {
        this.getStatisticsResponse = getStatisticsResponse;
        return this;
    }
    public Long statusCode;
    public GetStatisticsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}