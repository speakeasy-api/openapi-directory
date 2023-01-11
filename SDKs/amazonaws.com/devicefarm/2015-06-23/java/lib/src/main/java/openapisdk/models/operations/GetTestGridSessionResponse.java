package openapisdk.models.operations;



public class GetTestGridSessionResponse {
    public Object argumentException;
    public GetTestGridSessionResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetTestGridSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTestGridSessionResult getTestGridSessionResult;
    public GetTestGridSessionResponse withGetTestGridSessionResult(openapisdk.models.shared.GetTestGridSessionResult getTestGridSessionResult) {
        this.getTestGridSessionResult = getTestGridSessionResult;
        return this;
    }
    public Object internalServiceException;
    public GetTestGridSessionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object notFoundException;
    public GetTestGridSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetTestGridSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}