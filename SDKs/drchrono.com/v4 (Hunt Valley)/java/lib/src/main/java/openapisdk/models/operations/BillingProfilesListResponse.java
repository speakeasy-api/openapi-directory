package openapisdk.models.operations;



public class BillingProfilesListResponse {
    public String contentType;
    public BillingProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public BillingProfilesList200ApplicationJson billingProfilesList200ApplicationJSONObject;
    public BillingProfilesListResponse withBillingProfilesList200ApplicationJsonObject(BillingProfilesList200ApplicationJson billingProfilesList200ApplicationJSONObject) {
        this.billingProfilesList200ApplicationJSONObject = billingProfilesList200ApplicationJSONObject;
        return this;
    }
}