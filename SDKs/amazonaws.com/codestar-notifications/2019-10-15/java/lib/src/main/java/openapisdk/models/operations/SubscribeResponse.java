package openapisdk.models.operations;



public class SubscribeResponse {
    public String contentType;
    public SubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public SubscribeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscribeResult subscribeResult;
    public SubscribeResponse withSubscribeResult(openapisdk.models.shared.SubscribeResult subscribeResult) {
        this.subscribeResult = subscribeResult;
        return this;
    }
    public Object validationException;
    public SubscribeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}