package openapisdk.models.operations;



public class DeleteUserResponse {
    public String contentType;
    public DeleteUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public DeleteUserResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DeleteUserResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteUserResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}