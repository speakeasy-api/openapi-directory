package openapisdk.models.operations;



public class ListCallAnalyticsJobsResponse {
    public Object badRequestException;
    public ListCallAnalyticsJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListCallAnalyticsJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListCallAnalyticsJobsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListCallAnalyticsJobsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListCallAnalyticsJobsResponse listCallAnalyticsJobsResponse;
    public ListCallAnalyticsJobsResponse withListCallAnalyticsJobsResponse(openapisdk.models.shared.ListCallAnalyticsJobsResponse listCallAnalyticsJobsResponse) {
        this.listCallAnalyticsJobsResponse = listCallAnalyticsJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListCallAnalyticsJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}