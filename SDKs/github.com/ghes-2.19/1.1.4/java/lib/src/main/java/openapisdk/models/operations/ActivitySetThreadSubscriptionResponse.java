package openapisdk.models.operations;



public class ActivitySetThreadSubscriptionResponse {
    public String contentType;
    public ActivitySetThreadSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivitySetThreadSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivitySetThreadSubscriptionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ThreadSubscription threadSubscription;
    public ActivitySetThreadSubscriptionResponse withThreadSubscription(openapisdk.models.shared.ThreadSubscription threadSubscription) {
        this.threadSubscription = threadSubscription;
        return this;
    }
}