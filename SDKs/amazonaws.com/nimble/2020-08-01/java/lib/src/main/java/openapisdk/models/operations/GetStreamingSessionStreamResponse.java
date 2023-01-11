package openapisdk.models.operations;



public class GetStreamingSessionStreamResponse {
    public Object accessDeniedException;
    public GetStreamingSessionStreamResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetStreamingSessionStreamResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetStreamingSessionStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStreamingSessionStreamResponse getStreamingSessionStreamResponse;
    public GetStreamingSessionStreamResponse withGetStreamingSessionStreamResponse(openapisdk.models.shared.GetStreamingSessionStreamResponse getStreamingSessionStreamResponse) {
        this.getStreamingSessionStreamResponse = getStreamingSessionStreamResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetStreamingSessionStreamResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStreamingSessionStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetStreamingSessionStreamResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetStreamingSessionStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetStreamingSessionStreamResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetStreamingSessionStreamResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}