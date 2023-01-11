package openapisdk.models.operations;



public class ListRunsResponse {
    public Object argumentException;
    public ListRunsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListRunsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListRunsResult listRunsResult;
    public ListRunsResponse withListRunsResult(openapisdk.models.shared.ListRunsResult listRunsResult) {
        this.listRunsResult = listRunsResult;
        return this;
    }
    public Object notFoundException;
    public ListRunsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListRunsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}