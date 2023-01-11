package openapisdk.models.operations;



public class ListTestsResponse {
    public Object argumentException;
    public ListTestsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListTestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListTestsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTestsResult listTestsResult;
    public ListTestsResponse withListTestsResult(openapisdk.models.shared.ListTestsResult listTestsResult) {
        this.listTestsResult = listTestsResult;
        return this;
    }
    public Object notFoundException;
    public ListTestsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListTestsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListTestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}