package openapisdk.models.operations;



public class ListJobsResponse {
    public Object badRequestException;
    public ListJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListJobsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListJobsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListJobsResult listJobsResult;
    public ListJobsResponse withListJobsResult(openapisdk.models.shared.ListJobsResult listJobsResult) {
        this.listJobsResult = listJobsResult;
        return this;
    }
    public Long statusCode;
    public ListJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListJobsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}