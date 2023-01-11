package openapisdk.models.operations;



public class ListProjectsResponse {
    public Object argumentException;
    public ListProjectsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListProjectsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListProjectsResult listProjectsResult;
    public ListProjectsResponse withListProjectsResult(openapisdk.models.shared.ListProjectsResult listProjectsResult) {
        this.listProjectsResult = listProjectsResult;
        return this;
    }
    public Object notFoundException;
    public ListProjectsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListProjectsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}