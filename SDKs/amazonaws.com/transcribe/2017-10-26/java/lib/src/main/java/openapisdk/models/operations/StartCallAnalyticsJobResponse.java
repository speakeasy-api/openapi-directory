package openapisdk.models.operations;



public class StartCallAnalyticsJobResponse {
    public Object badRequestException;
    public StartCallAnalyticsJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public StartCallAnalyticsJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartCallAnalyticsJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartCallAnalyticsJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public StartCallAnalyticsJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartCallAnalyticsJobResponse startCallAnalyticsJobResponse;
    public StartCallAnalyticsJobResponse withStartCallAnalyticsJobResponse(openapisdk.models.shared.StartCallAnalyticsJobResponse startCallAnalyticsJobResponse) {
        this.startCallAnalyticsJobResponse = startCallAnalyticsJobResponse;
        return this;
    }
    public Long statusCode;
    public StartCallAnalyticsJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}