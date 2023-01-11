package openapisdk.models.operations;



public class CustomInsurancePlanNamesListResponse {
    public String contentType;
    public CustomInsurancePlanNamesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CustomInsurancePlanNamesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CustomInsurancePlanNamesList200ApplicationJson customInsurancePlanNamesList200ApplicationJSONObject;
    public CustomInsurancePlanNamesListResponse withCustomInsurancePlanNamesList200ApplicationJsonObject(CustomInsurancePlanNamesList200ApplicationJson customInsurancePlanNamesList200ApplicationJSONObject) {
        this.customInsurancePlanNamesList200ApplicationJSONObject = customInsurancePlanNamesList200ApplicationJSONObject;
        return this;
    }
}