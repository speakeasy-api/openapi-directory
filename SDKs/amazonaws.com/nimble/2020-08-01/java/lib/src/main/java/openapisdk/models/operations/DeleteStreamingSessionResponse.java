package openapisdk.models.operations;



public class DeleteStreamingSessionResponse {
    public Object accessDeniedException;
    public DeleteStreamingSessionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteStreamingSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteStreamingSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteStreamingSessionResponse deleteStreamingSessionResponse;
    public DeleteStreamingSessionResponse withDeleteStreamingSessionResponse(openapisdk.models.shared.DeleteStreamingSessionResponse deleteStreamingSessionResponse) {
        this.deleteStreamingSessionResponse = deleteStreamingSessionResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteStreamingSessionResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStreamingSessionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteStreamingSessionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteStreamingSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStreamingSessionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteStreamingSessionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}