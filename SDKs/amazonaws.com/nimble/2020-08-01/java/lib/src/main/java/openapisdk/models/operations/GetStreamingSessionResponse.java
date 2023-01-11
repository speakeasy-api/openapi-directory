package openapisdk.models.operations;



public class GetStreamingSessionResponse {
    public Object accessDeniedException;
    public GetStreamingSessionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetStreamingSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetStreamingSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStreamingSessionResponse getStreamingSessionResponse;
    public GetStreamingSessionResponse withGetStreamingSessionResponse(openapisdk.models.shared.GetStreamingSessionResponse getStreamingSessionResponse) {
        this.getStreamingSessionResponse = getStreamingSessionResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetStreamingSessionResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStreamingSessionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetStreamingSessionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetStreamingSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetStreamingSessionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetStreamingSessionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}