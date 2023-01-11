package openapisdk.models.operations;



public class DeleteAccessResponse {
    public String contentType;
    public DeleteAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public DeleteAccessResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAccessResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteAccessResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}