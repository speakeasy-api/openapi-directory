package openapisdk.models.operations;



public class ListGameServersResponse {
    public String contentType;
    public ListGameServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListGameServersResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListGameServersResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListGameServersOutput listGameServersOutput;
    public ListGameServersResponse withListGameServersOutput(openapisdk.models.shared.ListGameServersOutput listGameServersOutput) {
        this.listGameServersOutput = listGameServersOutput;
        return this;
    }
    public Long statusCode;
    public ListGameServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListGameServersResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}