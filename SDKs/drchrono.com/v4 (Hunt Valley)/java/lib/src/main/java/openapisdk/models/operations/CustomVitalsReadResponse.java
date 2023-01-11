package openapisdk.models.operations;



public class CustomVitalsReadResponse {
    public String contentType;
    public CustomVitalsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVitalType customVitalType;
    public CustomVitalsReadResponse withCustomVitalType(openapisdk.models.shared.CustomVitalType customVitalType) {
        this.customVitalType = customVitalType;
        return this;
    }
    public Long statusCode;
    public CustomVitalsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}