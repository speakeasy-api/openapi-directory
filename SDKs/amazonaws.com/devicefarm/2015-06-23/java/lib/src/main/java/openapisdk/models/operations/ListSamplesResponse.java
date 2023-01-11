package openapisdk.models.operations;



public class ListSamplesResponse {
    public Object argumentException;
    public ListSamplesResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListSamplesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListSamplesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListSamplesResult listSamplesResult;
    public ListSamplesResponse withListSamplesResult(openapisdk.models.shared.ListSamplesResult listSamplesResult) {
        this.listSamplesResult = listSamplesResult;
        return this;
    }
    public Object notFoundException;
    public ListSamplesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListSamplesResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListSamplesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}