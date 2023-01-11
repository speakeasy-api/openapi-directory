package openapisdk.models.operations;



public class BillingGetSharedStorageBillingOrgResponse {
    public String contentType;
    public BillingGetSharedStorageBillingOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BillingGetSharedStorageBillingOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CombinedBillingUsage combinedBillingUsage;
    public BillingGetSharedStorageBillingOrgResponse withCombinedBillingUsage(openapisdk.models.shared.CombinedBillingUsage combinedBillingUsage) {
        this.combinedBillingUsage = combinedBillingUsage;
        return this;
    }
}