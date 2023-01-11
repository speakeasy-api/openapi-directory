package openapisdk.models.operations;



public class AppsListAccountsForPlanResponse {
    public String contentType;
    public AppsListAccountsForPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListAccountsForPlanResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListAccountsForPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListAccountsForPlanResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MarketplacePurchase[] marketplacePurchases;
    public AppsListAccountsForPlanResponse withMarketplacePurchases(openapisdk.models.shared.MarketplacePurchase[] marketplacePurchases) {
        this.marketplacePurchases = marketplacePurchases;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public AppsListAccountsForPlanResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}