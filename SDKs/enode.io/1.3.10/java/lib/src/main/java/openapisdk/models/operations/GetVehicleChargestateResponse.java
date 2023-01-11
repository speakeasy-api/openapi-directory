package openapisdk.models.operations;



public class GetVehicleChargestateResponse {
    public String contentType;
    public GetVehicleChargestateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVehicleChargestateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetVehicleChargestate200ApplicationJson getVehicleChargestate200ApplicationJSONObject;
    public GetVehicleChargestateResponse withGetVehicleChargestate200ApplicationJsonObject(GetVehicleChargestate200ApplicationJson getVehicleChargestate200ApplicationJSONObject) {
        this.getVehicleChargestate200ApplicationJSONObject = getVehicleChargestate200ApplicationJSONObject;
        return this;
    }
}