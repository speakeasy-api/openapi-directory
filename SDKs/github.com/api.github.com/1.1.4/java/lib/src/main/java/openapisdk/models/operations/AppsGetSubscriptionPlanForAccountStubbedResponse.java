package openapisdk.models.operations;



public class AppsGetSubscriptionPlanForAccountStubbedResponse {
    public String contentType;
    public AppsGetSubscriptionPlanForAccountStubbedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetSubscriptionPlanForAccountStubbedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsGetSubscriptionPlanForAccountStubbedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.MarketplacePurchase marketplacePurchase;
    public AppsGetSubscriptionPlanForAccountStubbedResponse withMarketplacePurchase(openapisdk.models.shared.MarketplacePurchase marketplacePurchase) {
        this.marketplacePurchase = marketplacePurchase;
        return this;
    }
}