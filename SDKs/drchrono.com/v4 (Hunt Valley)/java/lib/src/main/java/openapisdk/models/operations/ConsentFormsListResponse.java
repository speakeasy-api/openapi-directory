package openapisdk.models.operations;



public class ConsentFormsListResponse {
    public String contentType;
    public ConsentFormsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConsentFormsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ConsentFormsList200ApplicationJson consentFormsList200ApplicationJSONObject;
    public ConsentFormsListResponse withConsentFormsList200ApplicationJsonObject(ConsentFormsList200ApplicationJson consentFormsList200ApplicationJSONObject) {
        this.consentFormsList200ApplicationJSONObject = consentFormsList200ApplicationJSONObject;
        return this;
    }
}