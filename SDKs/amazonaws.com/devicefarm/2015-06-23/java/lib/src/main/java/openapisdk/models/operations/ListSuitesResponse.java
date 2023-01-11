package openapisdk.models.operations;



public class ListSuitesResponse {
    public Object argumentException;
    public ListSuitesResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListSuitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListSuitesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListSuitesResult listSuitesResult;
    public ListSuitesResponse withListSuitesResult(openapisdk.models.shared.ListSuitesResult listSuitesResult) {
        this.listSuitesResult = listSuitesResult;
        return this;
    }
    public Object notFoundException;
    public ListSuitesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListSuitesResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListSuitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}