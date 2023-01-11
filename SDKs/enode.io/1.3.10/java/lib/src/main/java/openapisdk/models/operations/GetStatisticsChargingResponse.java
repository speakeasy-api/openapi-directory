package openapisdk.models.operations;



public class GetStatisticsChargingResponse {
    public String contentType;
    public GetStatisticsChargingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatisticsChargingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetStatisticsCharging200ApplicationJson[] getStatisticsCharging200ApplicationJSONObjects;
    public GetStatisticsChargingResponse withGetStatisticsCharging200ApplicationJsonObjects(GetStatisticsCharging200ApplicationJson[] getStatisticsCharging200ApplicationJSONObjects) {
        this.getStatisticsCharging200ApplicationJSONObjects = getStatisticsCharging200ApplicationJSONObjects;
        return this;
    }
}