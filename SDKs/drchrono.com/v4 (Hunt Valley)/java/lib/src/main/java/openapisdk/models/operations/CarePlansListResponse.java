package openapisdk.models.operations;



public class CarePlansListResponse {
    public String contentType;
    public CarePlansListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CarePlansListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CarePlansList200ApplicationJson carePlansList200ApplicationJSONObject;
    public CarePlansListResponse withCarePlansList200ApplicationJsonObject(CarePlansList200ApplicationJson carePlansList200ApplicationJSONObject) {
        this.carePlansList200ApplicationJSONObject = carePlansList200ApplicationJSONObject;
        return this;
    }
}