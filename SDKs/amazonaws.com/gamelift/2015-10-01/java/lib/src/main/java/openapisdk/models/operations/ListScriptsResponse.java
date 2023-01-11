package openapisdk.models.operations;



public class ListScriptsResponse {
    public String contentType;
    public ListScriptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListScriptsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListScriptsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListScriptsOutput listScriptsOutput;
    public ListScriptsResponse withListScriptsOutput(openapisdk.models.shared.ListScriptsOutput listScriptsOutput) {
        this.listScriptsOutput = listScriptsOutput;
        return this;
    }
    public Long statusCode;
    public ListScriptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListScriptsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}