package openapisdk.models.operations;



public class BillingGetSharedStorageBillingGheResponse {
    public String contentType;
    public BillingGetSharedStorageBillingGheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetSharedStorageBillingGheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CombinedBillingUsage combinedBillingUsage;
    public BillingGetSharedStorageBillingGheResponse withCombinedBillingUsage(openapisdk.models.shared.CombinedBillingUsage combinedBillingUsage) {
        this.combinedBillingUsage = combinedBillingUsage;
        return this;
    }
}