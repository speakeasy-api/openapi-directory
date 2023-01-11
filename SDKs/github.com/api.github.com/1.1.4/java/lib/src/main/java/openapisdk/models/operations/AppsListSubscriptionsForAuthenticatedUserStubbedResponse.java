package openapisdk.models.operations;



public class AppsListSubscriptionsForAuthenticatedUserStubbedResponse {
    public String contentType;
    public AppsListSubscriptionsForAuthenticatedUserStubbedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListSubscriptionsForAuthenticatedUserStubbedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListSubscriptionsForAuthenticatedUserStubbedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListSubscriptionsForAuthenticatedUserStubbedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.UserMarketplacePurchase[] userMarketplacePurchases;
    public AppsListSubscriptionsForAuthenticatedUserStubbedResponse withUserMarketplacePurchases(openapisdk.models.shared.UserMarketplacePurchase[] userMarketplacePurchases) {
        this.userMarketplacePurchases = userMarketplacePurchases;
        return this;
    }
}