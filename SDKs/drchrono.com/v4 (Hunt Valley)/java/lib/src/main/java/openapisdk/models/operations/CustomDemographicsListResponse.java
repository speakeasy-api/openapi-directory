package openapisdk.models.operations;



public class CustomDemographicsListResponse {
    public String contentType;
    public CustomDemographicsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CustomDemographicsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CustomDemographicsList200ApplicationJson customDemographicsList200ApplicationJSONObject;
    public CustomDemographicsListResponse withCustomDemographicsList200ApplicationJsonObject(CustomDemographicsList200ApplicationJson customDemographicsList200ApplicationJSONObject) {
        this.customDemographicsList200ApplicationJSONObject = customDemographicsList200ApplicationJSONObject;
        return this;
    }
}