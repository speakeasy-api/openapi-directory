package openapisdk.models.operations;



public class EligibilityChecksListResponse {
    public String contentType;
    public EligibilityChecksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EligibilityChecksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EligibilityChecksList200ApplicationJson eligibilityChecksList200ApplicationJSONObject;
    public EligibilityChecksListResponse withEligibilityChecksList200ApplicationJsonObject(EligibilityChecksList200ApplicationJson eligibilityChecksList200ApplicationJSONObject) {
        this.eligibilityChecksList200ApplicationJSONObject = eligibilityChecksList200ApplicationJSONObject;
        return this;
    }
}