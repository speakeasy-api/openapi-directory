package openapisdk.models.operations;



public class AppsListPlansStubbedResponse {
    public String contentType;
    public AppsListPlansStubbedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListPlansStubbedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListPlansStubbedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListPlansStubbedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MarketplaceListingPlan[] marketplaceListingPlans;
    public AppsListPlansStubbedResponse withMarketplaceListingPlans(openapisdk.models.shared.MarketplaceListingPlan[] marketplaceListingPlans) {
        this.marketplaceListingPlans = marketplaceListingPlans;
        return this;
    }
}