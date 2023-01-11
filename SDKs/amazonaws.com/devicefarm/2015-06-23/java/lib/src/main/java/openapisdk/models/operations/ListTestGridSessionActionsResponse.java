package openapisdk.models.operations;



public class ListTestGridSessionActionsResponse {
    public Object argumentException;
    public ListTestGridSessionActionsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListTestGridSessionActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListTestGridSessionActionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListTestGridSessionActionsResult listTestGridSessionActionsResult;
    public ListTestGridSessionActionsResponse withListTestGridSessionActionsResult(openapisdk.models.shared.ListTestGridSessionActionsResult listTestGridSessionActionsResult) {
        this.listTestGridSessionActionsResult = listTestGridSessionActionsResult;
        return this;
    }
    public Object notFoundException;
    public ListTestGridSessionActionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListTestGridSessionActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}