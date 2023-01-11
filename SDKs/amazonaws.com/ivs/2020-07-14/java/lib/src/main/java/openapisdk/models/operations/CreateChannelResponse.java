package openapisdk.models.operations;



public class CreateChannelResponse {
    public Object accessDeniedException;
    public CreateChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateChannelResponse createChannelResponse;
    public CreateChannelResponse withCreateChannelResponse(openapisdk.models.shared.CreateChannelResponse createChannelResponse) {
        this.createChannelResponse = createChannelResponse;
        return this;
    }
    public Object pendingVerification;
    public CreateChannelResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateChannelResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}