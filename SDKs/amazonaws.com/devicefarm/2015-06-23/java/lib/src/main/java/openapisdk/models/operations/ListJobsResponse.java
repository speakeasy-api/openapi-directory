package openapisdk.models.operations;



public class ListJobsResponse {
    public Object argumentException;
    public ListJobsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
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
    public Object notFoundException;
    public ListJobsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListJobsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}