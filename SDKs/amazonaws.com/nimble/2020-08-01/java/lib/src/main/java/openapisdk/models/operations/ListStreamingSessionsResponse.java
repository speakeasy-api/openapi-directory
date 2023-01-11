package openapisdk.models.operations;



public class ListStreamingSessionsResponse {
    public Object accessDeniedException;
    public ListStreamingSessionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListStreamingSessionsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListStreamingSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListStreamingSessionsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListStreamingSessionsResponse listStreamingSessionsResponse;
    public ListStreamingSessionsResponse withListStreamingSessionsResponse(openapisdk.models.shared.ListStreamingSessionsResponse listStreamingSessionsResponse) {
        this.listStreamingSessionsResponse = listStreamingSessionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStreamingSessionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListStreamingSessionsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListStreamingSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListStreamingSessionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListStreamingSessionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}