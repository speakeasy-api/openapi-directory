package openapisdk.models.operations;



public class GetDriversResponse {
    public String contentType;
    public GetDriversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDriversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDrivers200ApplicationJson getDrivers200ApplicationJSONObject;
    public GetDriversResponse withGetDrivers200ApplicationJsonObject(GetDrivers200ApplicationJson getDrivers200ApplicationJSONObject) {
        this.getDrivers200ApplicationJSONObject = getDrivers200ApplicationJSONObject;
        return this;
    }
}