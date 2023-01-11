package openapisdk.models.operations;



public class ActivityDeleteThreadSubscriptionResponse {
    public String contentType;
    public ActivityDeleteThreadSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityDeleteThreadSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityDeleteThreadSubscriptionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}