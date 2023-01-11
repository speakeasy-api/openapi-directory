package openapisdk.models.operations;



public class CustomVitalsListResponse {
    public String contentType;
    public CustomVitalsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CustomVitalsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CustomVitalsList200ApplicationJson customVitalsList200ApplicationJSONObject;
    public CustomVitalsListResponse withCustomVitalsList200ApplicationJsonObject(CustomVitalsList200ApplicationJson customVitalsList200ApplicationJSONObject) {
        this.customVitalsList200ApplicationJSONObject = customVitalsList200ApplicationJSONObject;
        return this;
    }
}