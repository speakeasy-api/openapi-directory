package openapisdk.models.operations;



public class BillingGetSharedStorageBillingUserResponse {
    public String contentType;
    public BillingGetSharedStorageBillingUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetSharedStorageBillingUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CombinedBillingUsage combinedBillingUsage;
    public BillingGetSharedStorageBillingUserResponse withCombinedBillingUsage(openapisdk.models.shared.CombinedBillingUsage combinedBillingUsage) {
        this.combinedBillingUsage = combinedBillingUsage;
        return this;
    }
}