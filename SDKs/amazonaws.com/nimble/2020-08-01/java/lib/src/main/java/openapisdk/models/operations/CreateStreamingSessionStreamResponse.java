package openapisdk.models.operations;



public class CreateStreamingSessionStreamResponse {
    public Object accessDeniedException;
    public CreateStreamingSessionStreamResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateStreamingSessionStreamResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateStreamingSessionStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStreamingSessionStreamResponse createStreamingSessionStreamResponse;
    public CreateStreamingSessionStreamResponse withCreateStreamingSessionStreamResponse(openapisdk.models.shared.CreateStreamingSessionStreamResponse createStreamingSessionStreamResponse) {
        this.createStreamingSessionStreamResponse = createStreamingSessionStreamResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateStreamingSessionStreamResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateStreamingSessionStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateStreamingSessionStreamResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateStreamingSessionStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateStreamingSessionStreamResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateStreamingSessionStreamResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}