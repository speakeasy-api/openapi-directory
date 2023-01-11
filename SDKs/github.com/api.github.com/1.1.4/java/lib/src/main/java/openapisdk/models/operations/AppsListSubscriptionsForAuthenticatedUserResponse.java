package openapisdk.models.operations;



public class AppsListSubscriptionsForAuthenticatedUserResponse {
    public String contentType;
    public AppsListSubscriptionsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListSubscriptionsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListSubscriptionsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListSubscriptionsForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.UserMarketplacePurchase[] userMarketplacePurchases;
    public AppsListSubscriptionsForAuthenticatedUserResponse withUserMarketplacePurchases(openapisdk.models.shared.UserMarketplacePurchase[] userMarketplacePurchases) {
        this.userMarketplacePurchases = userMarketplacePurchases;
        return this;
    }
}