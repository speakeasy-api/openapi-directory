package openapisdk.models.operations;



public class ListUploadsResponse {
    public Object argumentException;
    public ListUploadsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListUploadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListUploadsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListUploadsResult listUploadsResult;
    public ListUploadsResponse withListUploadsResult(openapisdk.models.shared.ListUploadsResult listUploadsResult) {
        this.listUploadsResult = listUploadsResult;
        return this;
    }
    public Object notFoundException;
    public ListUploadsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListUploadsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListUploadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}