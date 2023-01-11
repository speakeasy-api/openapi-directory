package openapisdk.models.operations;



public class ListTestGridSessionsResponse {
    public Object argumentException;
    public ListTestGridSessionsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListTestGridSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListTestGridSessionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListTestGridSessionsResult listTestGridSessionsResult;
    public ListTestGridSessionsResponse withListTestGridSessionsResult(openapisdk.models.shared.ListTestGridSessionsResult listTestGridSessionsResult) {
        this.listTestGridSessionsResult = listTestGridSessionsResult;
        return this;
    }
    public Object notFoundException;
    public ListTestGridSessionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListTestGridSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}