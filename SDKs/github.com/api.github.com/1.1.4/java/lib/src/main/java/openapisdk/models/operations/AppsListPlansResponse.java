package openapisdk.models.operations;



public class AppsListPlansResponse {
    public String contentType;
    public AppsListPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListPlansResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListPlansResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MarketplaceListingPlan[] marketplaceListingPlans;
    public AppsListPlansResponse withMarketplaceListingPlans(openapisdk.models.shared.MarketplaceListingPlan[] marketplaceListingPlans) {
        this.marketplaceListingPlans = marketplaceListingPlans;
        return this;
    }
}