package openapisdk.models.operations;



public class UnsubscribeResponse {
    public String contentType;
    public UnsubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnsubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnsubscribeResult unsubscribeResult;
    public UnsubscribeResponse withUnsubscribeResult(openapisdk.models.shared.UnsubscribeResult unsubscribeResult) {
        this.unsubscribeResult = unsubscribeResult;
        return this;
    }
    public Object validationException;
    public UnsubscribeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}