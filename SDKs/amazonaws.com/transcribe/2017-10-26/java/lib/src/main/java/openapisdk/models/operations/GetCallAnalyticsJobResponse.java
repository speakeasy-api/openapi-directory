package openapisdk.models.operations;



public class GetCallAnalyticsJobResponse {
    public Object badRequestException;
    public GetCallAnalyticsJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCallAnalyticsJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCallAnalyticsJobResponse getCallAnalyticsJobResponse;
    public GetCallAnalyticsJobResponse withGetCallAnalyticsJobResponse(openapisdk.models.shared.GetCallAnalyticsJobResponse getCallAnalyticsJobResponse) {
        this.getCallAnalyticsJobResponse = getCallAnalyticsJobResponse;
        return this;
    }
    public Object internalFailureException;
    public GetCallAnalyticsJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetCallAnalyticsJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetCallAnalyticsJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetCallAnalyticsJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}