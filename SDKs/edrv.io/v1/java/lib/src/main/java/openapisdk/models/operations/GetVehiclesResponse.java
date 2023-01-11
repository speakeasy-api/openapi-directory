package openapisdk.models.operations;



public class GetVehiclesResponse {
    public String contentType;
    public GetVehiclesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVehiclesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetVehicles200ApplicationJson getVehicles200ApplicationJSONObject;
    public GetVehiclesResponse withGetVehicles200ApplicationJsonObject(GetVehicles200ApplicationJson getVehicles200ApplicationJSONObject) {
        this.getVehicles200ApplicationJSONObject = getVehicles200ApplicationJSONObject;
        return this;
    }
}