package openapisdk.models.operations;



public class BillingProfilesReadResponse {
    public openapisdk.models.shared.BillingProfile billingProfile;
    public BillingProfilesReadResponse withBillingProfile(openapisdk.models.shared.BillingProfile billingProfile) {
        this.billingProfile = billingProfile;
        return this;
    }
    public String contentType;
    public BillingProfilesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingProfilesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}