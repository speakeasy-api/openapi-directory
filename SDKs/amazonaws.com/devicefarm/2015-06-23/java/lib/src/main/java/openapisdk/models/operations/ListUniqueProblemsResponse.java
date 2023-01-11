package openapisdk.models.operations;



public class ListUniqueProblemsResponse {
    public Object argumentException;
    public ListUniqueProblemsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListUniqueProblemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListUniqueProblemsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListUniqueProblemsResult listUniqueProblemsResult;
    public ListUniqueProblemsResponse withListUniqueProblemsResult(openapisdk.models.shared.ListUniqueProblemsResult listUniqueProblemsResult) {
        this.listUniqueProblemsResult = listUniqueProblemsResult;
        return this;
    }
    public Object notFoundException;
    public ListUniqueProblemsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListUniqueProblemsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListUniqueProblemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}