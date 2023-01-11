package openapisdk.models.operations;



public class ListServersResponse {
    public String contentType;
    public ListServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListServersResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListServersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListServersResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListServersResponse listServersResponse;
    public ListServersResponse withListServersResponse(openapisdk.models.shared.ListServersResponse listServersResponse) {
        this.listServersResponse = listServersResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListServersResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}