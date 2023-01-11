package openapisdk.models.operations;



public class AppsListAccountsForPlanStubbedResponse {
    public String contentType;
    public AppsListAccountsForPlanStubbedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListAccountsForPlanStubbedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListAccountsForPlanStubbedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListAccountsForPlanStubbedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MarketplacePurchase[] marketplacePurchases;
    public AppsListAccountsForPlanStubbedResponse withMarketplacePurchases(openapisdk.models.shared.MarketplacePurchase[] marketplacePurchases) {
        this.marketplacePurchases = marketplacePurchases;
        return this;
    }
}