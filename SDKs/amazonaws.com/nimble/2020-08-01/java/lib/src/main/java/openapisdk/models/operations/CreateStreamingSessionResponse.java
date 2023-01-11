package openapisdk.models.operations;



public class CreateStreamingSessionResponse {
    public Object accessDeniedException;
    public CreateStreamingSessionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateStreamingSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateStreamingSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStreamingSessionResponse createStreamingSessionResponse;
    public CreateStreamingSessionResponse withCreateStreamingSessionResponse(openapisdk.models.shared.CreateStreamingSessionResponse createStreamingSessionResponse) {
        this.createStreamingSessionResponse = createStreamingSessionResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateStreamingSessionResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateStreamingSessionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateStreamingSessionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateStreamingSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateStreamingSessionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateStreamingSessionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}