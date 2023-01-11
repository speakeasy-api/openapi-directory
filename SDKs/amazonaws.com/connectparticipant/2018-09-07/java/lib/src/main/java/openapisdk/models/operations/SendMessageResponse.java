package openapisdk.models.operations;



public class SendMessageResponse {
    public Object accessDeniedException;
    public SendMessageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SendMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SendMessageResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.SendMessageResponse sendMessageResponse;
    public SendMessageResponse withSendMessageResponse(openapisdk.models.shared.SendMessageResponse sendMessageResponse) {
        this.sendMessageResponse = sendMessageResponse;
        return this;
    }
    public Long statusCode;
    public SendMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SendMessageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SendMessageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}