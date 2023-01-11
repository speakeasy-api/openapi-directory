package openapisdk.models.operations;



public class CreateStreamKeyResponse {
    public Object accessDeniedException;
    public CreateStreamKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateStreamKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStreamKeyResponse createStreamKeyResponse;
    public CreateStreamKeyResponse withCreateStreamKeyResponse(openapisdk.models.shared.CreateStreamKeyResponse createStreamKeyResponse) {
        this.createStreamKeyResponse = createStreamKeyResponse;
        return this;
    }
    public Object pendingVerification;
    public CreateStreamKeyResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateStreamKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateStreamKeyResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateStreamKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateStreamKeyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}