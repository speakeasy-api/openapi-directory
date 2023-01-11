package openapisdk.models.operations;



public class DeleteCallAnalyticsJobResponse {
    public Object badRequestException;
    public DeleteCallAnalyticsJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteCallAnalyticsJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCallAnalyticsJobResponse;
    public DeleteCallAnalyticsJobResponse withDeleteCallAnalyticsJobResponse(java.util.Map<String, Object> deleteCallAnalyticsJobResponse) {
        this.deleteCallAnalyticsJobResponse = deleteCallAnalyticsJobResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteCallAnalyticsJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteCallAnalyticsJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteCallAnalyticsJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}