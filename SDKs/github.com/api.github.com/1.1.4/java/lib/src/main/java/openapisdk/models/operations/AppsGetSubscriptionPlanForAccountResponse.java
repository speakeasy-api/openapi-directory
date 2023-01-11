package openapisdk.models.operations;



public class AppsGetSubscriptionPlanForAccountResponse {
    public String contentType;
    public AppsGetSubscriptionPlanForAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetSubscriptionPlanForAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsGetSubscriptionPlanForAccountResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MarketplacePurchase marketplacePurchase;
    public AppsGetSubscriptionPlanForAccountResponse withMarketplacePurchase(openapisdk.models.shared.MarketplacePurchase marketplacePurchase) {
        this.marketplacePurchase = marketplacePurchase;
        return this;
    }
}