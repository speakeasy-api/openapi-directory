package openapisdk.models.operations;



public class SendEventResponse {
    public Object accessDeniedException;
    public SendEventResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SendEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SendEventResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.SendEventResponse sendEventResponse;
    public SendEventResponse withSendEventResponse(openapisdk.models.shared.SendEventResponse sendEventResponse) {
        this.sendEventResponse = sendEventResponse;
        return this;
    }
    public Long statusCode;
    public SendEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SendEventResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SendEventResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}