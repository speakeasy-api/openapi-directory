package openapisdk.models.operations;



public class GetTestGridProjectResponse {
    public Object argumentException;
    public GetTestGridProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public GetTestGridProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTestGridProjectResult getTestGridProjectResult;
    public GetTestGridProjectResponse withGetTestGridProjectResult(openapisdk.models.shared.GetTestGridProjectResult getTestGridProjectResult) {
        this.getTestGridProjectResult = getTestGridProjectResult;
        return this;
    }
    public Object internalServiceException;
    public GetTestGridProjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object notFoundException;
    public GetTestGridProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetTestGridProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}